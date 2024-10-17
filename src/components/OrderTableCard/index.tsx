import { useContext } from "react";
import "./orderTableCard.css";
import { GlobalContext } from "../../hook/GlobalContext";
type OrderTableCardProps = {
  tableNo: string;
  menuId: string;
  status: string;
  amount: number;
  image: string;
};

export const OrderTableContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="order-table-container">{children}</div>;
};

export const OrderTableCard = ({
  amount,
  image,

  status,
}: OrderTableCardProps) => {
  const { order } = useContext(GlobalContext).orderProvider;

  return (
    <div className="order-table-section">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{}}>
          <img src={image} width={50} />
        </div>
        <div>
          <p>
            <span>{amount} </span>{" "}
          </p>
        </div>
        <div>
          <p>{status} </p>
        </div>
      </div>
    </div>
  );
};
export default OrderTableCard;
