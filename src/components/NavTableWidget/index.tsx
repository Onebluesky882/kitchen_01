import { Link } from "react-router-dom";
import "./navTableWidget.css";
import { useContext } from "react";
import { GlobalContext } from "../../hook/GlobalContext";
type NavbarProps = {
  tableNo: string;
  status: string;
  seat?: number;
};

const NavTableWidget = () => {
  const { tableNo: no } = useContext(GlobalContext).tableProvider;
  return (
    <Container>
      {no.map((table, index) => (
        <NavTableWidgetComponent
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

export const NavTableWidgetComponent = ({ tableNo, status }: NavbarProps) => {
  return (
    <div className="nav-table-order ">
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/${tableNo}`}
      >
        <div style={StatusTable(status)}>
          <h3>{tableNo}</h3>
        </div>
      </Link>
    </div>
  );
};

const StatusTable = (status: string): React.CSSProperties => {
  const bgStatus = status === "AVAILABLE";
  return {
    padding: "10px 30px 10px 30px",
    margin: "0 20px 0 20px",
    backgroundColor: bgStatus ? "#DDC291" : "gray",
    borderRadius: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
  };
};

export default NavTableWidget;
