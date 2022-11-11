import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRabbitmqRoomDto } from './dto/create-rabbitmq-room.dto';
import { UpdateRabbitmqRoomDto } from './dto/update-rabbitmq-room.dto';

@Injectable()
export class RabbitmqRoomsService {

  constructor(
    @Inject('SOFTWARE_SERVICE') private readonly softwareClient: ClientProxy,
  ) {
    this.softwareClient.connect();
  }

  async create() {
    await this.softwareClient.emit('room_created', {message: `${new Date()}`})
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
