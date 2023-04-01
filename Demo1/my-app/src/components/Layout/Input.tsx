import React, { useState } from "react";
import { Button, Input, Form, notification } from "antd";
import type { FormInstance } from "antd/es/form";
import { ToDoContext } from "../../context/toDoContext";

type NotificationType = "success" | "info" | "warning" | "error";

function InputComponents(): JSX.Element {
  let [addState, setValue] = useState({title: "" });

  const formRef = React.useRef<FormInstance>(null);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    type: NotificationType,
    mess: string,
    des: string
  ) => {
    api[type]({
      message: mess,
      description: des,
      duration: 1,
      placement: "topRight",
    });
  };
  const handleOnChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  )=> {
    setValue({ ...addState, title: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let key = String(Math.floor(Math.random() * 1001));
    if (addState.title.trim() !== "") {
      setValue({ title:"" });
      formRef.current?.resetFields();
      openNotification("success", "Success", "Add Success");
      return {id:key.toString(),title:addState.title};
    } else {
      openNotification("error", "Error", "Title can't null");
      return {id:"",title:""};
    }
  };

  return (
    <ToDoContext.Consumer>
      {({addNewToDo}) => (
        <Form name="basic" layout="vertical" autoComplete="off" ref={formRef}>
          {contextHolder}
          <Form.Item label="Title" name="title">
            <Input
              placeholder="Add new..."
              onChange={(event) => handleOnChangeName(event)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
            <Button
              onClick={(event) => {
                let toDo=handleSubmit(event);
                  if(toDo.id !==""){
                   addNewToDo(toDo);}
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </ToDoContext.Consumer>
  );
}

export default InputComponents;
