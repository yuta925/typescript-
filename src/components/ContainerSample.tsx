const Container = (props: { title: string; children: React.ReactElement }) => {
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
