import { getRepository } from 'typeorm';
import Idea from '../models/Ideas';

interface PaginationDTO {
  page: any;
}

export default class PaginationListService {
  public async execute({ page }: PaginationDTO): Promise<Idea[]> {
    const ideaRepository = getRepository(Idea);

    const pagination = await ideaRepository.find({
      take: 4,
      skip: (page - 1) * 4,
    });

    return pagination;
  }
}

// skip: quantos registros por página // Limit (paginated) - max number of entities should be taken.
// take: deslocamento dos registros

// ex.:
// take: 10,
// skip: (page - 1) * 10,
// Ah, lembrando que o valor de page que você recebe na função
// deve ser sempre maior ou igual a 1.
