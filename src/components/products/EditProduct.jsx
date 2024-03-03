import React, { useState } from "react";
import Form from "../Form/Form";

const EditProduct = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div>
      <Form isEdit={isEdit} />
    </div>
  );
};

export default EditProduct;
