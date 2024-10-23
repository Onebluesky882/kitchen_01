import { useContext, useState } from "react";
import { GlobalContext } from "../../hook/GlobalContext";
import { MenuItem, MenuItemSupabase } from "../../types/order";
import { getMenuItem } from "../../data/Menu";

type AddMenuProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  index: number;
};

const AddMenuItems = ({
  id,
  name,
  price,
  image,
  category,
  index,
}: AddMenuProps) => {
  const { menus, addMenu } = useContext(GlobalContext).menuProvider;
  const [bgButton, setBgButton] = useState(false);

  const handleSubmit = () => {
    const menuId: Pick<MenuItemSupabase, "id"> = {
      id,
    };
    addMenu({ id });

    setBgButton(true);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid gray",
        margin: "10px",
        alignItems: "center",
        paddingLeft: "50px",
        gap: "10px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <p>{index} . </p>
      <img src={image} width={45} alt={name} />

      <p> {name}</p>
      <p>ราคา {price}</p>
      <p>group : {category}</p>
      <button
        style={{
          position: "absolute",
          right: "30px",
          backgroundColor: bgButton ? "green" : "gray",
        }}
        onClick={handleSubmit}
      >
        {bgButton ? "Added" : "Add"}
      </button>
    </div>
  );
};
export default AddMenuItems;
