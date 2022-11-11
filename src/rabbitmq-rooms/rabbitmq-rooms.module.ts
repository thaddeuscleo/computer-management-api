import { Module } from '@nestjs/common';
import { RabbitmqRoomsService } from './rabbitmq-rooms.service';
import { RabbitmqRoomsController } from './rabbitmq-rooms.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SOFTWARE_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [`${configService.get('RABBITMQ_URL')}`],
            queue: `${configService.get('SOFTWARE_QUEUE')}`,
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [RabbitmqRoomsController],
  providers: [RabbitmqRoomsService],
})
export class RabbitmqRoomsModule {}
