import React, { useState } from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import AddCategory from "./add-modal/AddCategory";
import Table from "../../core-ui/Table";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PannelWrapper>
      <Table
        open={setIsOpen}
        title="category"
        modal="add category"
        theadData={["category", "image", "action"]}
      />
      {isOpen && <AddCategory open={setIsOpen}/>}
    </PannelWrapper>
  );
};

export default Category;
