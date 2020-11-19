import { getCustomRepository } from 'typeorm';

import IdeaRepository from '../repositories/IdeaRepository';

export default class DeleteIdeaService {
  public async execute(id: string) {
    const ideaRepository = getCustomRepository(IdeaRepository);
    const idea = await ideaRepository.findOne(id);

    if(!idea) {
      throw new Error('Idea does not exist.');
    }

    await ideaRepository.delete(id);
  }
}