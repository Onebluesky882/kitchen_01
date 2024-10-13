import { useNavigate } from "react-router-dom";
import "./navTableWidget.css";
import { useContext } from "react";
import { GlobalContext } from "../../hook/GlobalContext";
import { tables } from "../../data/tables";
type NavbarProps = {
  tableNo: string;
  status: string;
  seat?: number;
};

const NavTableWidget = () => {
  return (
    <Container>
      {tables.map((table, index) => (
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
  const { tableNo: no, selectTableNo } =
    useContext(GlobalContext).tableProvider;
  console.log("navtable", no);

  const hadleSubmit = () => {
    selectTableNo(tableNo);
    navigate(`/${tableNo}`);
  };
  return (
    <div className="nav-table-order ">
      <div onClick={hadleSubmit} style={StatusTable(status)}>
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
