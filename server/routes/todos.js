const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const todoController = require("../controllers/todos-controller");

router.get("/", todoController.getTodoList);

router.get("/:id", todoController.getTodoById);

router.post("/", /*check('title').notEmpty,*/ todoController.createTodo);

router.patch("/:id", todoController.setTodoAttribute);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
