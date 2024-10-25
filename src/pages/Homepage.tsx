import { useEffect } from "react";
import supabase from "../utils/supabase";
import { TableContainer } from "../components/TableOrder";
import "./style/homepage.css";
import { colors } from "../data/Theme";

const Homepage = () => {
  return (
    <div className="container-01">
      {/* // todo sort Fifo from supabase set order table sort by time{" "} */}
      <h1 style={{ textAlign: "center", color: colors.blue }}>
        {" "}
        kitchen Program{" "}
      </h1>

      <div>
        <TableContainer></TableContainer>
      </div>
    </div>
  );
};
export default Homepage;
