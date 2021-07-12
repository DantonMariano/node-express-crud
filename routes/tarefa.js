const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController')


/* POST envia tarefa. */
router.post('/', (req, res, next) => {
  TarefaController.inserir_tarefa(req.body,(result)=>{
    if (result === 'sucessful') res.redirect('/')
  })
});
module.exports = router;
