import "./styles/menuBar.css";
export const MenuBarRight = () => {
  let menu = [];
  for (let i = 1; i < 5; i++) {
    menu.push(`Menu Item ${i}`);
  }
  return (
    <div className="menubar-right">
      {menu.map((item, index) => (
        <ul key={index} className="menu-list-style">
          <li key={index}>{item}</li>
        </ul>
      ))}
    </div>
  );
};
export const MenuBarLeft = () => {
  let menu = [];
  for (let i = 1; i < 5; i++) {
    menu.push(`Menu Item ${i}`);
  }
  return (
    <div className="menubar-left">
      {menu.map((item, index) => (
        <ul key={index} className="menu-list-style">
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};
