import React from "react";
import { useHistory } from "react-router-dom";

function LeerKorb() {
  let history = useHistory();
  
  const viewHome = () => {
    history.push("/");
  };

  return (
    <div className="leerkorb">
      <div>Buraya bakarlar.</div>
      <p>Sepetinizde henüz bir ürün yoktur.</p>
      <button onClick={viewHome}>Alisverise basla</button>
    </div>
  );
}

export default LeerKorb;
