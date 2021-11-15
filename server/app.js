const http = require("http");
const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();

app.use(express.json());

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin",'*');
//   res.setHeader("Access-Control-Allow-Headers",'*');
//   res.setHeader("Access-Control-Allow-Methods",'*');
//   next();
// })

app.use("/api/todos", todosRouter);

app.use((error, req, res, next) => {
  const code = error.code ? error.code : 500;
  const message = error.message ? error.message : "Some error occured";
  res.status(code).json({
    message: message,
  });
});

const server = http.createServer(app);
server.listen(3000);
