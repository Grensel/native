import React, { useState } from "react";

export type ManType = {
  name: string;
  age: number;
  lessons: Array<{ title: string; name?: string }>;
  address: { street: { title: string } };
};
type PropsType = {
  title: string;
  man: ManType;
  car: { model: string };
};

function useDimychState(m: string) {
  return [m, function () {}];
}
function useDimychState2(m: string) {
  return { message: m, setMessage: function () {} };
}

export const ManComponent: React.FC<PropsType> = ({
  title,
  man: { name },
  ...props
}) => {
  // const {
  //   title,
  //   man: { name },
  // } = props;

  const [messag, setMessag] = useState("hello");
  const [messages, setMessages] = useDimychState("hello");
  const { message, setMessage } = useDimychState2("hello");

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};
