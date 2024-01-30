import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return this.prisma.notes.create({
      data: createNoteDto,
    });
  }

  findAll() {
    return this.prisma.notes.findMany();
  }

  findToday() {
    return this.prisma.notes.findMany({
      where: {
        createdAt: {
          lte: new Date(),
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.notes.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.prisma.notes.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  remove(id: number) {
    return this.prisma.notes.delete({ where: { id } });
  }
}
