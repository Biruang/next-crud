import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group, GroupDocument } from './group.schema';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupDocument>,
  ) {}

  async findAll(): Promise<Array<Group>> {
    return this.groupModel.find().exec();
  }

  async findById(id: string): Promise<Group> {
    return this.groupModel.findById(id);
  }

  async create(group: Group): Promise<Group> {
    return this.groupModel.create(group);
  }

  async update(id: string, group: Group): Promise<Group> {
    return this.groupModel.updateOne({ _id: id }, group).exec();
  }

  async delete(id: string): Promise<Group> {
    return this.groupModel.deleteOne({ _id: id });
  }
}
