import React, { useState } from "react";
import {
  Space,
  Table,
  Button,
  Popconfirm,
  Form,
  Input,
  InputNumber,
  Tooltip,
} from "antd";
import { ToDoContext } from "../../context/toDoContext";
interface DataType {
  key: string;
  id: string;
  title: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text" | "textarea";
  record: DataType;
  index: number;
  children: React.ReactNode;
}

const { TextArea } = Input;

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : inputType === "textarea" ? (
      <TextArea rows={4} />
    ) : (
      <Input />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function MyComponent() {
  const context = React.useContext(ToDoContext);

  function handleOfDelete(toDo: any): void {
    context.deleteToDo(toDo);
    console.log(context.state.arrToDos);
  }

  const originData: DataType[] = [];
  {
    context.state.arrToDos.map((item: any) => {
      let add = { key: item.id, id: item.id, title: item.title };
      originData.push(add);
    });
  }

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: DataType) => record.key === editingKey;

  const edit = (record: Partial<DataType> & { key: React.Key }) => {
    form.setFieldsValue({ title: record.title });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as DataType;

      const newData = [...originData];
      const index = newData.findIndex((item) => key === item.key);
      context.updateToDo(row, index);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "ToDoItem",
      dataIndex: "title",
      key: "title",
      editable: true,
      ellipsis: {
        showTitle: false,
      },
      render: (title: string) => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: DataType) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button danger>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle" wrap>
            <Button disabled={editingKey !== ""} onClick={() => edit(record)}>
              Edit
            </Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleOfDelete(record.key)}
              disabled={editingKey !== ""}
            >
              <Button type="primary" danger disabled={editingKey !== ""}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: "textarea",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={originData}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ pageSize: 5 }}
      />
    </Form>
  );
}

export default MyComponent;
