import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
