import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import TableOrder, { TableContainer } from "../components/TableOrder";
import "./style/homepage.css";

const Homepage = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    callTable();
  });

  const callTable = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .order("created_at", { ascending: true });
    if (error) {
      console.log(" error na ", error);
    } else if (data) {
      console.log(data);
    }
  };

  return (
    <div className="container-01">
      {/* // todo sort Fifo from supabase set order table sort by time{" "} */}
      <h1 style={{ textAlign: "center" }}> kitchen Program </h1>

      <div>
        <TableContainer>
          <p>wwfwf</p>
        </TableContainer>
      </div>
    </div>
  );
};
export default Homepage;
