const { validationResult } = require("express-validator");
const HttpError = require("../models/httpError");
const { v4: uuidv4 } = require("uuid");

let TODOS = [
  {
    id: "231",
    title: "Buy fruits",
    body: "Apple, Mango, Chiku",
  },
  {
    id: "23321",
    title: "Buy Milk",
    body: "Milk 1 ltr",
  },
  {
    id: "23541",
    title: "Complete assignment",
    body: "Newton School DSA",
  },
];

const getTodoList = (req, res, next) => {
  res.json({ todos: TODOS });
};

const getTodoById = (req, res, next) => {
  const id = req.params.id;
  const resultant = TODOS.find((todo) => todo.id == id);
  if (!resultant) {
    next(new HttpError("Resource not found", 404));
    return;
  }
  res.json(resultant);
};

const createTodo = (req, res, next) => {
  // const err = validationResult(req);
  // if (!err.isEmpty()) {
  //   throw new HttpError("Missing values", 400);
  //   }
  const { title, body } = req.body;
  const newTask = {
    id: uuidv4(),
    title: title,
    body: body,
  };
  TODOS.push(newTask);
  res.status(201).json({ todos: TODOS });
};

const setTodoAttribute = (req, res, next) => {
  const id = req.params.id;
  const { body } = req.body;
  const task = { ...TODOS.find((tsk) => tsk.id == id) };
  const index = TODOS.findIndex((todo) => todo.id == id);
  task.body = body;
  TODOS[index] = task;
  res.status(200).json(task);
};

const deleteTodo = (req, res, next) => {
  const id = req.params.id;
  TODOS = [...TODOS].filter((element) => element.id !== id);
  res.status(200).json({
    status: "Successfully deleted",
  });
};

module.exports = {
  getTodoList: getTodoList,
  getTodoById: getTodoById,
  createTodo: createTodo,
  setTodoAttribute: setTodoAttribute,
  deleteTodo: deleteTodo,
};
