import { getRepository } from 'typeorm';

import Idea from '../models/Ideas';

interface RequestDTO {
  title: string;
  category: string;
  description: string;
}

export default class CreateIdeaService {
  public async execute({ title, category, description }: RequestDTO): Promise<Idea> {
    const ideaRepository = getRepository(Idea);

    const ideaCreated = { title, category, description };

    const idea = await ideaRepository.save(ideaCreated);

    return idea;
  }
}