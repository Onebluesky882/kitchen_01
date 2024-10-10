import "./navbar.css";
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

const Navber = () => {
  // first in first out

  return (
    <NavcontaiNer>
      {data.map((table) => (
        <WidgetTable tableNo={table.tableNo} status={table.status} />
      ))}{" "}
    </NavcontaiNer>
  );
};

const NavcontaiNer = ({ children }: React.PropsWithChildren) => {
  return <div className="container">{children}</div>;
};

export const WidgetTable = ({ tableNo, status }: NavbarProps) => {
  return (
    <div className="table">
      <div style={StatusTable(status)}>
        <h3 className="text-status">
          {tableNo} <span>{status}</span>
        </h3>
      </div>
    </div>
  );
};

const StatusTable = (status: string): React.CSSProperties => {
  const bgStatus = status === "AVAILABLE";
  return {
    padding: "20px",
    backgroundColor: bgStatus ? "aquamarine" : "gray",
    borderRadius: "2000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
  };
};

export default Navber;
