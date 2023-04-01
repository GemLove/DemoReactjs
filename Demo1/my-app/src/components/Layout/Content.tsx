import React, { useState } from "react";
import { Row, Col, Divider, Typography } from "antd";
import InputComponent from "./Input";
import MyComponent from "./toDoList";
import { ToDoContext } from "../../context/toDoContext";
const { Title } = Typography;

const ContentComponents: React.FC = () => {
  let [state, setValue] = useState({
    arrToDos: [
      {
        id: "abc",
        title:
          "Hoàn thành một web ToDo đơn giản......................................................................................................................................",
      },
    ],
  });
  const addNewToDo = (toDo: { id: string; title: string }) => {
    let addToDos = state.arrToDos;
    addToDos.push(toDo);
    setValue({  arrToDos: addToDos });
  };
  const deleteToDo = (key: string) => {
    let delToDos = state.arrToDos;
    delToDos = delToDos.filter((item) => item.id !== key);
    setValue({  arrToDos: delToDos });
  };
  const updateToDo = (toDo: { id: string; title: string }, index: number) => {
    let newData = state.arrToDos;
    let item = newData[index];
    if (index > -1) {
      newData.splice(index, 1, {
        ...item,
        ...toDo,
      });
      setValue({ arrToDos: newData });
    }
  };
  return (
    <>
      <ToDoContext.Provider value={{state,addNewToDo,updateToDo,deleteToDo}}>
        <Divider>
          <Title level={2}>ToDo Form</Title>
        </Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={12}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            
          >
            <InputComponent />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
          >
            <MyComponent
            />
          </Col>
        </Row>
      </ToDoContext.Provider>
    </>
  );
};

export default ContentComponents;
