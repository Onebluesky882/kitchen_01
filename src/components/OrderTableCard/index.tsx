import { colors } from "../../data/Theme";
import "./orderTableCard.css";
type OrderTableCardProps = {
  status: string;
  name: string;
  amount: number;
  image: string;
};

export const OrderTableContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="order-table-container">{children}</div>;
};

export const OrderTableCard = ({
  amount,
  image,
  name,
  status,
}: OrderTableCardProps) => {
  return (
    <div className="order-table-section">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{}}>
          <img src={image} width={50} />
        </div>
        <div>
          <p>
            {name} <span>{amount} </span>{" "}
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
