
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // Kết nối MongoDB
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/betawatch'),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}
