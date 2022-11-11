import { Injectable } from '@nestjs/common';
import { CreateRabbitmqRoomDto } from './dto/create-rabbitmq-room.dto';
import { UpdateRabbitmqRoomDto } from './dto/update-rabbitmq-room.dto';

@Injectable()
export class RabbitmqRoomsService {
  create(createRabbitmqRoomDto: CreateRabbitmqRoomDto) {
    return 'This action adds a new rabbitmqRoom';
  }

  findAll() {
    return `This action returns all rabbitmqRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rabbitmqRoom`;
  }

  update(id: number, updateRabbitmqRoomDto: UpdateRabbitmqRoomDto) {
    return `This action updates a #${id} rabbitmqRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} rabbitmqRoom`;
  }
}
