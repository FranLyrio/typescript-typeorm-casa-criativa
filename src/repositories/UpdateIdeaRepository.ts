import { EntityRepository, Repository } from 'typeorm';
import Ideas from '../models/Ideas';

@EntityRepository(Ideas)
export default class UpdateIdeaRepository extends Repository<Ideas> {
  public async findById(id: string): Promise<Ideas | undefined> {
    const idea = await this.findOne(id);

    return idea;
  }
}