const TarefaModel = require('../models/TarefaModel');

exports.inserir_tarefa = (data, callback) => {

  if (!data || !data.tarefa || !data.desc || !data.data) return callback('invalid')

  TarefaModel.insert_tarefa(data, (status)=>{
    if(status===200){
      return callback('sucessful')
    }
  })
}