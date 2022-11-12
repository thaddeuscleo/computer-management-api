import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const isApolloSandBox = config.get<string>('APOLLO_SANDBOX') === 'true';
        const isPlayground =
          config.get<string>('PLAYGROUND') === 'true' && !isApolloSandBox;
        const plugin = isApolloSandBox
          ? ApolloServerPluginLandingPageLocalDefault()
          : {};

        return {
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          plugins: [plugin],
          playground: isPlayground,
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(), 
    RoomsModule, PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
