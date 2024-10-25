import { Link } from "react-router-dom";
import "./navTableWidget.css";
import { useContext } from "react";
import { GlobalContext } from "../../hook/GlobalContext";

type NavbarProps = {
  tableNo: string;
  status: string;
};

const NavTableWidget = () => {
  const { table } = useContext(GlobalContext).orderProvider;

  return (
    <Container>
      {table.map((table, index) => (
        <NavTableWidgetComponent
          tableNo={table.tableNo}
          status={table.status}
          key={index}
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
        <div style={statusTable(status)}>
          <h3>{tableNo}</h3>
        </div>
      </Link>
    </div>
  );
};

const statusTable = (status: string): React.CSSProperties => {
  const bgStatus = status === "ORDERED";
  return {
    padding: "10px 30px 10px 30px",
    margin: "0 20px 0 20px",
    backgroundColor: bgStatus ? "#FAE263" : "gray",
    borderRadius: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
  };
};

export default NavTableWidget;
