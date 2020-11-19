import { getCustomRepository } from 'typeorm';
import UpdateIdeaRepository from '../repositories/UpdateIdeaRepository';
import Ideas from '../models/Ideas';

interface RequestDTO {
  id: string;
  title: string;
  description: string;
  category: string;
}

export default class UpdateIdeaService {
  public async execute({ id, title, description, category }: RequestDTO): Promise<Ideas | undefined> {
    const ideaRepository = getCustomRepository(UpdateIdeaRepository);

    const idea = await ideaRepository.findOne(id);

    if(!idea) {
      throw new Error('Não existe ideia cadastrada');
    }

    idea.title = title;
    idea.category = category;
    idea.description = description;

    await ideaRepository.save(idea);

    return idea;
  }
}