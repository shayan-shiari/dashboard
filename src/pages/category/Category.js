import React from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import Table from "../../core-ui/Table";

const Category = () => {
  return (
    <PannelWrapper>
      <Table title="category" modal="add category" theadData={["category","image", "action"]}/>
    </PannelWrapper>
  );
};

export default Category;
