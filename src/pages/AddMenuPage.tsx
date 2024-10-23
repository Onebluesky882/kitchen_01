import AddMenuItems from "../components/AddMenuItem";
import { menu } from "../data/Menu";

const AddMenuPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>AddMenuPage</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr ",

          border: "1px solid red",
          marginLeft: "250px",
          marginRight: "250px",
        }}
      >
        {menu.map((item, index) => (
          <AddMenuItems
            key={item.id}
            index={index + 1}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
};
export default AddMenuPage;
