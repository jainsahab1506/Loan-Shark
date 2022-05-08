import React from "react";
import Sidebar from "./Sidebar";
import { shade } from "./../../static/templates/colors";
import { useState } from "react";
import AddApplication from "./AddApplication";
const MyApp = () => {
  const [stage, setStage] = useState(0);
  const renderStage = (_stage) => {
    switch (_stage) {
      case 0:
        return <AddApplication />;
      case 1:
        return <AddApplication />;
      case 2:
        return <AddApplication />;
    }
  };
  return (
    <div className="flex m-3 rounded-lg  w-full h-full rounded-tr-lg">
      <Sidebar stage={stage} setStage={setStage} />
      {renderStage(stage)}
    </div>
  );
};

export default MyApp;