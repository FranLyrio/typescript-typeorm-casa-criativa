import { EntityRepository, Repository } from 'typeorm';
import Ideas from '../models/Ideas';

@EntityRepository(Ideas)
export default class IdeaRepository extends Repository<Ideas> {}
