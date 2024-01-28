import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: false })
  desc: string;
}
