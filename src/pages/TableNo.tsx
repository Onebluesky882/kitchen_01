import { useParams } from "react-router-dom";
import TableNoCard from "../components/TableNoCard";
import { useContext } from "react";
import { GlobalContext } from "../hook/GlobalContext";
import OrderTableCard, {
  OrderTableContainer,
} from "../components/OrderTableCard";

const TableNo = () => {
  const { tableNo = "" } = useParams<{ tableNo?: string }>();

  const { order, table } = useContext(GlobalContext).orderProvider;

  const selectedTable = table.find((no) => no.tableNo === tableNo);

  const orderTable = order.filter(
    (item) => item.tableNo === selectedTable?.tableNo
  );
  console.log("orderTable", orderTable);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <TableNoCard tableNo={tableNo} />
      </h1>
      <OrderTableContainer>
        {orderTable.map((menu) => (
          <OrderTableCard
            tableNo={menu.tableNo}
            amount={menu.amount}
            name={menu.name}
            price={menu.price}
            image={menu.image}
            key={menu.id}
          />
        ))}
      </OrderTableContainer>
    </div>
  );
};

export default TableNo;
