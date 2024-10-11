import { useParams } from "react-router-dom";

const TableNo = () => {
  const { tableNo } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{tableNo}</h1>
    </div>
  );
};

export default TableNo;
