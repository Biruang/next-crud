import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:nbvehrby38648108@cluster0.imky3.mongodb.net/crud?retryWrites=true&w=majority',
    ),
    UserModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
