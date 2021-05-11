// que1
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//que2
let todos = [
  { todo: "wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
 
];

//que3
app.get("/todos", (req, res) => {
  res.json(todos);
});

//que4
app.post("/create/todo", (req, res) => {
  const todo = req.body.todo;
  const isCompleted = req.body.isCompleted;
  const newDo = { todo, isCompleted };
  todos.push(newDo);
  res.json(newDo);
});

//que5
app.put("/update/todo/:name", (req, res) => {
  const updateTodo = req.params.name;
  const found = todos.find((element) => {
    return element.todo === updateTodo;
  });
  if (found) {
    found.todo = req.body.todo;
    found.isCompleted=req.body.isCompleted

    res.json(found);
  } else {
    return "todo not found";
  }
});

//que6
app.delete("/delete/todo/:name",(req,res)=>{
    const newArray = todos.filter((element)=>{
        return element.todo!== req.params.name
     })
const remove = todos.filter((element)=>{
    return element.todo=== req.params.name
})
todos=newArray
if (remove) {
    res.json(remove)
}

})

//que7
app.put("/complete/todo/:name",(req,res)=>{
   const modify= todos.find((element)=>{
       return element.todo ===  req.params.name
    })
    if (modify) {
        modify.isCompleted="true" 
        res.json(todos)
    }
    else{res.json("tre")}
 

})

//que8
app.get("/completed/todos",(res,req)=>{
return todos.filter((element)=>{
return element.isCompleted===true
})
})


app.listen(port, () => {
  console.log("hi from app");
});
