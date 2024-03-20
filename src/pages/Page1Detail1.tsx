import { useLocation } from "react-router-dom";

export const Page1Detail1 = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Page1Detail1のページ</h1>
      {state != null ? (
        <ul>
          {state.map((arr: any) => {
            return <li key="arr">{arr}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
