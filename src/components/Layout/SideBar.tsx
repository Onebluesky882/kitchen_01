import "./styles/SideBar.css";
export const SideBar = () => {
  let menu = [];
  for (let i = 0; i < 7; i++) {
    menu.push(`order : ${i}`);
  }
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <p>Order lists</p>
        {menu.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
