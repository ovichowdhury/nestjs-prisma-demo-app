import { ApiProperty } from '@nestjs/swagger';
import { Notes } from '@prisma/client';

export class NoteEntity implements Notes {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  desc: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
