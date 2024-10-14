import { useParams } from "react-router-dom";
import { useTheme } from "../hook/useTheme";

const TableNo = () => {
  const colors = useTheme();
  const { tableNo } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center", color: colors.greenMenu }}>
        {tableNo}
      </h1>
    </div>
  );
};

export default TableNo;
