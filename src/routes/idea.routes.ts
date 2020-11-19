import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import IdeaRepository from '../repositories/IdeaRepository';
import CreateIdeaService from '../services/CreateIdeaService';
import UpdateIdeaService from '../services/UpdateIdeaService';
import DeleteIdeaService from '../services/DeleteIdeaService';

const ideaRouter = Router();

ideaRouter.get('/', async (request, response) => {
  const ideaRepository = getCustomRepository(IdeaRepository);
  const ideas = await ideaRepository.find();

  return response.json(ideas);
});

ideaRouter.post('/', async (request, response) => {
  const { title, category, description } = request.body;

  const createIdeaService = new CreateIdeaService();

  const idea = await createIdeaService.execute({
    title,
    category,
    description
  });

  return response.json(idea);
});

ideaRouter.put('/:id', async (request, response) => {
  const { title, description, category } = request.body;
  const { id } = request.params;

  const updateIdeaService = new UpdateIdeaService();

  const updatedIdea = await updateIdeaService.execute({
    id,
    title,
    description,
    category
  });

  return response.json(updatedIdea);
});

ideaRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  
  const deleteIdeaService = new DeleteIdeaService();
  await deleteIdeaService.execute(id);

  return response.status(200).send();
});

export default ideaRouter;