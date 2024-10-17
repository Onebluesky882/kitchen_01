import { useParams } from "react-router-dom";
import TableNoCard from "../components/TableNoCard";
import { useContext } from "react";
import GlobalProvider, { GlobalContext } from "../hook/GlobalContext";
import mockOrders from "../data/mockFood";
import OrderTableCard, {
  OrderTableContainer,
} from "../components/OrderTableCard";

const TableNo = () => {
  const { tableNo } = useParams();
  const { tableNo: no } = useContext(GlobalContext).tableProvider;
  const { order, callOrder } = useContext(GlobalContext).orderProvider;

  let table = no.find((t) => t.tableNo === tableNo);

  if (!table) {
    return <p>Table not found</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <TableNoCard tableNo={table.tableNo} />
      </h1>
      <OrderTableContainer>
        {mockOrders.map((menu) => (
          <OrderTableCard
            status={menu.status}
            name={menu.name}
            amount={menu.amount ?? 0}
            image={menu.image}
          />
        ))}
      </OrderTableContainer>
    </div>
  );
};

export default TableNo;
