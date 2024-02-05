import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { title, children } = props;
  return (
    <div>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  );
};

export default Parent;
