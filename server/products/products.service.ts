
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Watch } from '../schemas/watch.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Watch') private watchModel: Model<Watch>) {}

  async findAll(filters: { brand?: string; minPrice?: number }): Promise<Watch[]> {
    const query: any = {};
    if (filters.brand && filters.brand !== 'All') query.brand = filters.brand;
    if (filters.minPrice) query.price = { $gte: filters.minPrice };
    return this.watchModel.find(query).sort({ createdAt: -1 }).exec();
  }

  async create(watchData: any): Promise<Watch> {
    const newWatch = new this.watchModel(watchData);
    return newWatch.save();
  }

  async remove(id: string): Promise<void> {
    const result = await this.watchModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Watch specimen not found');
  }
}
