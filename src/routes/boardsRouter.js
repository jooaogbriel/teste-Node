import { Router } from 'express';

import createBoardsController from '../controllers/boards.controllers';
import updatedBoardController from '../controllers/update';

const router = Router();
router.post('/boards', createBoardsController);
router.put('/boards/:id', updatedBoardController);