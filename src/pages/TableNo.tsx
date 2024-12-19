import { useParams } from "react-router-dom";
import TableNoCard from "../components/TableNoCard";
import { useContext } from "react";
import { GlobalContext } from "../hook/GlobalContext";
import OrderTableCard, {
  OrderTableContainer,
} from "../components/OrderTableCard";

const TableNo = () => {
  const { tableNo = "" } = useParams<{ tableNo?: string }>();

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <TableNoCard tableNo={tableNo} />
      </h1>
      <OrderTableContainer></OrderTableContainer>
    </div>
  );
};

export default TableNo;
