import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Typography, notification } from "antd";
import InputComponent from "./Input";
import MyComponent from "./toDoList";
import { ToDoContext } from "../../../context/toDoContext";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const acc: string = cookies.get("_user");

const clearToDo = { arrToDos: [{ id: "", job: "" }] };

const { Title } = Typography;

type NotificationType = "success" | "info" | "warning" | "error";

const ContentComponents = (): JSX.Element => {
  let [state, setToDo] = useState(clearToDo);

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

  useEffect(() => {
    if (acc) {
      let data = { arrToDos: [{ id: "", job: "" }] };
      data.arrToDos = data.arrToDos.filter((item) => item.id !== "");
      axios
        .get("http://localhost:8080/account/todolish/" + acc)
        .then(function (resp) {
          // setToDo({ arrToDos: addToDos });
          resp.data.toDo.map((item: any) => {
            data.arrToDos.push({ id: item.id, job: item.job });
            return data;
          });
          setToDo(data);
        })
        .catch(function (resp) {
          console.log(resp);
        });
    } else {
      setToDo(clearToDo);
    }
  }, []);

  const addNewToDo = async (toDo: { id: string; job: string }) => {
    let addToDos = state.arrToDos;
    if (!toDo.id) {
      openNotification("error", "Error", "Title can't null");
    } else {
      await axios
        .post("http://localhost:8080/account/createjob", {
          username: acc,
          job: toDo.job,
          id: toDo.id,
        })
        .then(function (resp) {
          addToDos.push(toDo);
          setToDo({ arrToDos: addToDos });
          openNotification("success", "Success", "Add Success");
        })
        .catch(function (resp) {
          openNotification("error", "Error",resp.response.data );
        });
    }
  };
  const deleteToDo = async (key: string) => {
    let delToDos = state.arrToDos;

    await axios
      .post("http://localhost:8080/account/deletejob/" + key, {
        toDo: { id: key },
      })
      .then(function (resp) {
        delToDos = delToDos.filter((item) => item.id !== key);
        setToDo({ arrToDos: delToDos });
      })
      .catch(function (resp) {
        console.log(resp);
      });
  };
  const updateToDo = async (
    toDo: { id: string; job: string },
    index: number
  ) => {
    let newData = state.arrToDos;
    let item = newData[index];
    if (index > -1) {
      await axios
        .post("http://localhost:8080/account/editjob/" + item.id, {
          toDo: { id: item.id },
          newjob: toDo.job,
        })
        .then(function (resp) {
          newData.splice(index, 1, {
            ...item,
            ...toDo,
          });
          setToDo({ arrToDos: newData });
        })
        .catch(function (resp) {
          console.log(resp);
        });
    }
  };
  return (
    <>
      <ToDoContext.Provider
        value={{ state, addNewToDo, updateToDo, deleteToDo }}
      >
        {contextHolder}
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
            <MyComponent />
          </Col>
        </Row>
      </ToDoContext.Provider>
    </>
  );
};

export default ContentComponents;
