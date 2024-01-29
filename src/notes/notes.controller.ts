import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  findAll() {
    return this.notesService.findAll();
  }

  @Get('today')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  findToday() {
    return this.notesService.findToday();
  }

  @Get(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiTags('Notes')
  @ApiCreatedResponse({ type: NoteEntity })
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
