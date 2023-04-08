import React, { useState, useContext, useRef } from "react";
import { Button, Input, Form } from "antd";
import type { FormInstance } from "antd/es/form";
import { ToDoContext } from "../../../context/toDoContext";

function InputComponents(): JSX.Element {
  let [addState, setValue] = useState({ title: "" });

  const toDoContext = useContext(ToDoContext);

  const formRef = useRef<FormInstance>(null);

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...addState, title: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let key = String(Math.floor(Math.random() * 1001));
    const data = toDoContext.state;
    let check = false;
    while (!check) {
      data.arrToDos.filter((item) => {
        if (item.id === key) {
          key = String(Math.floor(Math.random() * 1001));
        }else{
          return (check = true);
        }
      });
    }
    if (addState.title.trim() !== "") {
      setValue({ title: "" });
      formRef.current?.resetFields();
      toDoContext.addNewToDo({ id: key.toString(), job: addState.title });
    } else {
      toDoContext.addNewToDo({ id: "", job: "" });
    }
  };

  return (
    <Form name="basic" layout="vertical" autoComplete="off" ref={formRef}>
      <Form.Item label="Title" name="title">
        <Input
          placeholder="Add new..."
          onChange={(event) => handleOnChangeName(event)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
        <Button
          onClick={(event) => {
            handleSubmit(event);
          }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default InputComponents;
