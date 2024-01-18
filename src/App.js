import React from "react";

function Food({ fav }) {
  return <h1>{fav}도 먹고싶고</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>너무 배고픈데</h1>
      <Food fav="닭갈비" />
      <Food fav="마라탕" />
      <Food fav="순대국" />
      <Food fav="마제소바" />
      <h1>그냥 전부 내 입으로.</h1>
    </div>
  );
}

export default App;
