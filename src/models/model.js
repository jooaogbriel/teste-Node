const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Boards = sequelize.define("repo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    stage: {
        type: DataTypes.INTEGER,
    },
}, {timestamps: false});

module.exports = Boards;

Boards.updateBoard = async (id, title, stage) => {
    try {
      const board = await Boards.findByPk(id);
  
      if (!board) {
        throw new Error('Registro não encontrado');
      }
  
      board.title = title;
      board.stage = stage;
  
      await board.save();
  
      return board;
    } catch (error) {
      throw new Error('Ocorreu um erro ao atualizar o registro');
    }
  };
  
  module.exports = Boards;