const TarefaModel = require('../models/TarefaModel');

exports.get_all_tarefas = (callback) => {
  TarefaModel.get_all_tarefas((result)=>{
    return callback({'query': result})
  });
}