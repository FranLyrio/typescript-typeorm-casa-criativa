import { getRepository } from 'typeorm';
import Idea from '../models/Ideas';

interface PaginationDTO {
  page: any;
}

export default class PaginationListService {
  public async execute({
    page,
  }: PaginationDTO): Promise<Array<Idea[] | number>> {
    const ideaRepository = getRepository(Idea);

    const [dataPerPage, count] = await ideaRepository.findAndCount({
      take: 4,
      skip: (page - 1) * 4,
    });

    return [dataPerPage, count];
  }
}

// skip: quantos registros por página // Limit (paginated) - max number of entities should be taken.
// take: deslocamento dos registros

// ex.:
// take: 10,
// skip: (page - 1) * 10,
// Ah, lembrando que o valor de page que você recebe na função
// deve ser sempre maior ou igual a 1.
