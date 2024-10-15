type OrderTableCardProps = {
  status: string;
  name: string;
  amount: number;
  image: string;
};

const OrderTableCard = ({
  status,
  amount,
  image,
  name,
}: OrderTableCardProps) => {
  return (
    <div style={{ backgroundColor: "blue", display: "flex" }}>
      <div>
        <img src={image} alt={image} width={40} />
      </div>
      <div>
        <p>{name}</p>
        <p>{amount}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};
export default OrderTableCard;
