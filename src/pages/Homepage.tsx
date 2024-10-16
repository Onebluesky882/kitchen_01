import { useEffect } from "react";
import supabase from "../utils/supabase";
import { TableContainer } from "../components/TableOrder";
import "./style/homepage.css";
import { colors } from "../data/Theme";

const Homepage = () => {
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
      <h1 style={{ textAlign: "center", color: colors.blue }}>
        {" "}
        kitchen Program{" "}
      </h1>
      <p> เ สวัสดี</p>
      <div>
        <TableContainer></TableContainer>
      </div>
    </div>
  );
};
export default Homepage;
