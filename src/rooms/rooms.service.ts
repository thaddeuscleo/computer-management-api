import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Injectable()
export class RoomsService {
  private readonly logger = new Logger(RoomsService.name);

  constructor(
    @Inject('SOFTWARE_SERVICE') private readonly softwareClient: ClientProxy,
    private prisma: PrismaService,
  ) {
    this.softwareClient.connect().catch((error) => {
      this.logger.error(error);
    });
  }

  async create(input: CreateRoomInput) {
    const res = await this.prisma.room.create({
      data: {
        roomNumber: input.roomNumber,
      },
    });

    await this.softwareClient.emit('room_created', res);
    return res;
  }

  findAll() {
    return this.prisma.room.findMany();
  }

  findOne(id: string) {
    return this.prisma.room.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, input: UpdateRoomInput) {
    return this.prisma.room.update({
      data: {
        roomNumber: input.roomNumber,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
