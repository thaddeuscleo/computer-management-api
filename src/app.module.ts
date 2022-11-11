import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqRoomsModule } from './rabbitmq-rooms/rabbitmq-rooms.module';
import { RabbitmqRoomsModule } from './rabbitmq-rooms/rabbitmq-rooms.module';

@Module({
  imports: [RabbitmqRoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
