import { useNavigate } from "react-router-dom";
import "./navTableWidget.css";
type NavbarProps = {
  tableNo: string;
  status: string;
  seat?: number;
};
const data = [
  {
    tableNo: "A1",
    status: "available",
  },
  {
    tableNo: "A2",
    status: "unavailable",
  },
  {
    tableNo: "B1",
    status: "AVAILABLE",
  },
];

const NavTableWidget = () => {
  // todo first in first out Fifo order soon from supabase

  return (
    <Container>
      {data.map((table, index) => (
        <NavTableOrder
          key={index}
          tableNo={table.tableNo}
          status={table.status}
        />
      ))}{" "}
    </Container>
  );
};

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className="nav-table-widget-container ">{children}</div>;
};

export const NavTableOrder = ({ tableNo, status }: NavbarProps) => {
  const navigate = useNavigate();
  const hadleOnClick = () => {
    navigate(`/${tableNo}`);
  };
  return (
    <div className="nav-table-order ">
      <div onClick={hadleOnClick} style={StatusTable(status)}>
        <h3 className="text-status">{tableNo}</h3>
      </div>
    </div>
  );
};

const StatusTable = (status: string): React.CSSProperties => {
  const bgStatus = status === "AVAILABLE";
  return {
    padding: "10px 30px 10px 30px",
    margin: "0 20px 0 20px",
    backgroundColor: bgStatus ? "#87C594" : "gray",
    borderRadius: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
  };
};

export default NavTableWidget;
