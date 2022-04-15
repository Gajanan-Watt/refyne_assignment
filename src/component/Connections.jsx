import "./connection.css";
import { useState } from "react";
import { Peoples } from "./Peoples";
export const Connection = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="conn">
        <div>
          <h3>People you may know</h3>
          <hr />
        </div>
        {array.map((el) => {
          return <Peoples />;
        })}
      </div>
    </>
  );
};
