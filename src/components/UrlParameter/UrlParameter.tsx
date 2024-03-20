import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>PAGE2</h1>
      <p>URL PARAMATER is {id}</p>
    </div>
  );
};
