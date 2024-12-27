import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  title: string;

  @Prop()
  tgUsername: string;

  @Prop()
  email: string;

  @Prop({ default: new Date() })
  createdAt: Date;
}
export const userSchema = SchemaFactory.createForClass(User);
