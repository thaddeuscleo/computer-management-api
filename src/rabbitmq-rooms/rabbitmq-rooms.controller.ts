import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RabbitmqRoomsService } from './rabbitmq-rooms.service';
import { CreateRabbitmqRoomDto } from './dto/create-rabbitmq-room.dto';
import { UpdateRabbitmqRoomDto } from './dto/update-rabbitmq-room.dto';

@Controller('rooms')
export class RabbitmqRoomsController {
  constructor(private readonly rabbitmqRoomsService: RabbitmqRoomsService) {}

  @Get('/')
  createRoom() {
    return this.rabbitmqRoomsService.create();
  }
}
