/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */
import createBoardsService from '../services/boards.services';

const createBoardsController = async (request, response) => {
  const { title, id, stage } = request.body;

  const user = await createBoardsService(title, id, stage);

  return response.status(201).json(user);
};

export default createBoardsController;