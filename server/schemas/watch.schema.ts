
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Watch extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop({ enum: ['Luxury', 'Sport', 'Classic', 'Diver'], default: 'Luxury' })
  category: string;

  @Prop()
  movement: string;

  @Prop()
  caseSize: string;
}

export const WatchSchema = SchemaFactory.createForClass(Watch);
