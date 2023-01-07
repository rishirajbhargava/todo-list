import express  from "express";

// import { getAllTodos } from "../../client/src/redux/actions/index.js";
import { addTodo ,getAllTodos,toggleTodoDone,updateTodo,deleteTodo} from "../controller/todo-controller.js";

const route = express.Router();

route.post('/todos' ,addTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)



export default route; 