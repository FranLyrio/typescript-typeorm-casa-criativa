import { Router } from 'express';

const router = Router();

const idea = [ '1', 'sdyag', 'teste', 'vamos testar' ]

router.get('/home', (request, response) => {
  return response.json(idea);
});

router.post('/teste', (request, response) => {
  const { id, description, title, image } = request.body;
  const idea = { id, description, title, image }
  
  return response.json(idea);
});

router.put('/teste/:id', (request, response) => {
  const { id } = request.params;
  const bodyId = request.body.id;

  const newIdea = {
    id,
    image: request.body.image,
    category: request.body.category,
    title: request.body.title,
    description: request.body.description
  }

  if(id === bodyId) {
    return response.json(newIdea);
  } else return response.json('Não foi possível atualizar ideia');
});

router.delete('/teste/:id', (request, response) => {
  const id = request.params.id;
  const bodyId = request.body.id;

  // console.log(request.body.id);
  // console.log(request.params.id);
  // console.log(5);
  // console.log('oi');

  if(id !== bodyId) {
    return response.json('Não foi possível deletar');
  } else return response.json('Deletado com sucesso');
});

export default router;
