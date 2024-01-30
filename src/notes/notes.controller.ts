import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { NoteEntity } from './entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  async create(@Body() createNoteDto: CreateNoteDto) {
    return new NoteEntity(await this.notesService.create(createNoteDto));
  }

  @Get()
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  async findAll() {
    const notes = await this.notesService.findAll();
    return notes.map((n) => new NoteEntity(n));
  }

  @Get('today')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  async findToday() {
    const notes = await this.notesService.findToday();
    return notes.map((n) => new NoteEntity(n));
  }

  @Get(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return new NoteEntity(await this.notesService.findOne(+id));
  }

  @Patch(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return new NoteEntity(await this.notesService.update(+id, updateNoteDto));
  }

  @Delete(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  async remove(@Param('id', ParseIntPipe) id: string) {
    return new NoteEntity(await this.notesService.remove(+id));
  }
}
