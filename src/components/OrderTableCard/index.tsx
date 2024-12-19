import "./orderTableCard.css";

type OrderTableCardProps = {
  tableNo: string;
  amount: number;
  name: string;
  price: number;
  image: string;
};

export const OrderTableContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="order-table-container">{children}</div>;
};

export const OrderTableCard = ({
  amount,
  image,
  name,
  price,
}: OrderTableCardProps) => {
  return (
    <div className="order-table-section">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{}}>
          <img src={image} width={80} />
        </div>
        <div>
          <p>ชื่อเมนู : {name}</p>
          <h3> ราคา{price}</h3>
          <h3> รวม {price * amount}</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default OrderTableCard;
