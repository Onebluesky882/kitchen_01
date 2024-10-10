import { useEffect } from "react";
import supabase from "../utils/supabase";

const Homepage = () => {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Hello </h1>
      <CallDatabase />
    </div>
  );
};
export default Homepage;

export const CallDatabase = () => {
  useEffect(() => {
    callTable();
  }, []);
  const callTable = async () => {
    const { data } = await supabase.from("orders").select();
    if (data) {
      console.log(data);
    }
  };
  return <div>CallDatabase</div>;
};
