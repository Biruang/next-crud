import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User[]> {
    return this.userModel.find({ _id: id }).exec();
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.updateOne({ _id: id }, user).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.deleteOne({ _id: id }).exec();
  }

  async addFriend(id: string, user: User): Promise<User> {
    return this.userModel.updateOne({ _id: id });
  }
}
