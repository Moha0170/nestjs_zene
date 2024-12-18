import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService, PrismaService],
})
export class MusicModule {}
