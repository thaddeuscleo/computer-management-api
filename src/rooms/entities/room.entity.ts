import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Room {
  @Field(() => String, { description: 'Room identifier In UUID' })
  id?: string;

  @Field(() => String, { description: 'Room Number' })
  roomNumber: string;
}
