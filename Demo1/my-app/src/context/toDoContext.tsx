import React from 'react'

let state={
    arrToDos: [{ id: "", title: "" }]
  }
  
const MyContext = React.createContext({state,addNewToDo: (toDo: { id: string; title: string }) => {},deleteToDo: (key: string ) => {},updateToDo : (toDo: { id: string; title: string }, index: number) => { }
  });
MyContext.displayName="ToDoContext";
export const ToDoContext = MyContext;
  