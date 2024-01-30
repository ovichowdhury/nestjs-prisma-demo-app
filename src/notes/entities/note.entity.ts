import { ApiProperty } from '@nestjs/swagger';
import { Notes } from '@prisma/client';
import { UserEntity } from '../../users/entities/user.entity';

export class NoteEntity implements Notes {
  constructor({ author, ...data }: Partial<NoteEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }

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

  @ApiProperty({ required: false, nullable: true })
  authorId: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;
}
