import { useParams } from "react-router-dom";
import TableNoCard from "../components/TableNoCard";
import { useContext } from "react";
import { GlobalContext } from "../hook/GlobalContext";
import OrderTableCard, {
  OrderTableContainer,
} from "../components/OrderTableCard";

const TableNo = () => {
  const { tableNo } = useParams();
  const { tableNo: no } = useContext(GlobalContext).tableProvider;
  const { order } = useContext(GlobalContext).orderProvider;

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
        {order.map((menu) => (
          <OrderTableCard
            tableNo={menu.tableNo}
            amount={menu.amount}
            name={menu.name}
            price={menu.price}
            image={menu.image}
          />
        ))}
      </OrderTableContainer>
    </div>
  );
};

export default TableNo;
