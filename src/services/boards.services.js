const Boards = require('../models/model');

const createBoardsService = async(title) => {

    let lastId = 0

    const newUser = { 
        id: ++lastId, 
        stage: 1,
        title,
    } 
    Boards.create(newUser);

    return  { 
      title, 
    } ;
} 
export default createBoardsService;