import React from "react";

const TiltleContext = React.createContext("");

const Title = () => {
  return (
    <TiltleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TiltleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React Book";

  return (
    <TiltleContext.Provider value={title}>
      <Header />
    </TiltleContext.Provider>
  );
};

export default Page;
