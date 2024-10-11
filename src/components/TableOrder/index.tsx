import React from "react";
import "./table-order.css";

type TableOrderProps = {
  no: string;
  order: any;
};
const TableOrder = ({ no, order }: TableOrderProps) => {
  return (
    <div className="table-order-section ">
      <div className="">
        <h3>table order {no} </h3>
        <p>order detail : {JSON.stringify(order)}</p>
      </div>
    </div>
  );
};
export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="table-order-container">{children}</div>;
};

export default TableOrder;
