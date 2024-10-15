import { useParams } from "react-router-dom";
import TableNoCard from "../components/TableNoCard";
import { useContext } from "react";
import { GlobalContext } from "../hook/GlobalContext";
import OrderTableCard from "../components/OrderTableCard";
import mockOrders from "../data/mockFood";

const TableNo = () => {
  const { tableNo } = useParams();
  const { tableNo: no } = useContext(GlobalContext).tableProvider;

  let table = no.find((t) => t.tableNo === tableNo);

  if (!table) {
    return <p>Table not found</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <TableNoCard tableNo={table.tableNo} />
      </h1>
      <div style={{ backgroundColor: "yellowgreen" }}>
        {mockOrders.map((menu) => (
          <OrderTableCard
            status={menu.status}
            name={menu.name}
            amount={menu.amount ?? 0}
            image={menu.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TableNo;
