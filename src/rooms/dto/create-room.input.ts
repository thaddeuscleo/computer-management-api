import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoomInput {
  @Field(() => String, { description: 'Room ID', nullable: true , defaultValue: ""})
  id?: string;

  @Field(() => String, { description: 'Room Number' })
  roomNumber: string;
}
