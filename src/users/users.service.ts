import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaSevice: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaSevice.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prismaSevice.user.findMany();
  }

  findOne(id: number) {
    return this.prismaSevice.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaSevice.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prismaSevice.user.delete({ where: { id } });
  }
}
