import React from "react";
import Header from "../header/Header";
import Aside from "../aside/Aside";
import Table from "../../core-ui/Table";

const PannelWrapper = ({ Children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside/>
        <div className="w-9/12 mx-auto">
          <Table />
        </div>
      </div>
    </>
  );
};

export default PannelWrapper;
