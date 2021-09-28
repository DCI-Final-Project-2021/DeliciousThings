import React from "react";
import { useHistory } from "react-router-dom";

function Korb() {
  let history = useHistory();

  const viewForm = () => {
    history.push("/form");
  };

  return (
    <div>
      Korb <br />
      <input type="submit" onClick={viewForm}></input>
    </div>
  );
}

export default Korb;
