import { Button, Input, InputProps, List } from "antd";
import { FC, ReactElement, useState } from "react";

const AboutInfo: FC = (): ReactElement => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
  ];
  const [list, setList] = useState<Array<string>>(data);

  const [value, setValue] = useState<string>("");
  const inputProps: InputProps = {
    value,
    placeholder: "请输入",
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return (
    <div>
      <h1>AboutInfo</h1>
      <Input {...inputProps} />
      <Button
        type="primary"
        onClick={() => {
          setList([...list, value]);
          setValue("");
        }}
      >
        Primary Button
      </Button>
      <List
        dataSource={list}
        bordered
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default AboutInfo;
