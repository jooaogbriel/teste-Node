const Boards = require('../models/model');

const updatedBoardController = async (req,res) => {

    try {
        const { id } = req.params; 
        const { title, stage } = req.body;
    
        const updatedBoard = await Boards.updateBoard(id, title, stage);
    
        res.json(updatedBoard);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao atualizar o registro.' });
      }

}
export default updatedBoardController;