import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { PrismaService } from 'src/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class MusicService {

  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createMusicDto: CreateMusicDto) {
    return 'This action adds a new music';
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} music`;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  async remove(id: number) {
    try {
      return await this.db.song.delete({
        where: {
          id
        }
      });
    }
    catch {
      return undefined
    }
  }
}
