import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqRoomsModule } from './rabbitmq-rooms/rabbitmq-rooms.module';

@Module({
  imports: [RabbitmqRoomsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
