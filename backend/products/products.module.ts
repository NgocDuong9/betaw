
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { WatchSchema } from '../schemas/watch.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Watch', schema: WatchSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
