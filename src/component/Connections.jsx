import "./connection.css";
import { Peoples } from "./Peoples";
export const Connection = () => {
  return (
    <>
      <div className="conn">
        <div>
          <h3>People you may know</h3>
          <hr />
        </div>
        <Peoples />
        <Peoples />
        <Peoples />
        <Peoples />
      </div>
    </>
  );
};
