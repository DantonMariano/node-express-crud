let ENV = process.env

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  database:ENV.DB_DATABASE,
  password: ''
});
connection.connect();

exports.get_all_tarefas = (callback) => {
  let query = 'SELECT * FROM tarefas'

  connection.query(query , (err, rows, fields) =>{
    let result = [];
    if (err) throw err;
    rows.forEach((el) => {
      let id = el.id;
      let tarefa = el.tarefa;
      let desc = el.desc;
      let created_at = datatofstring(new Date(el.created_at));
      let altered_at = datatofstring(new Date(el.altered_at));
      let prazo = datatofstring(new Date(el.prazo));
      let resultobj = {id,tarefa,desc,created_at,altered_at,prazo};
      result.push(resultobj);
    });
    return callback(result);
  })
}

exports.insert_tarefa = (request, callback) =>{
  let tarefa = request.tarefa;
  let prazo = request.data;
  let desc = request.desc;
  let query ="INSERT INTO tarefas (`tarefa`,`prazo`,`desc`)" + `VALUES ('${tarefa}','${prazo}','${desc}')`;
  connection.query(query, (err, row, fields) =>{
    if (err){
      throw err;
    } else {
      return callback(200);
    }
  })
}

function datatofstring(isodata){
  let data = isodata;
  let mes = data.getMonth() + 1;

  return `${data.getUTCDate().toString().padStart(2,'0')}/${mes.toString().padStart(2,'0')}/${data.getFullYear()}`;
}