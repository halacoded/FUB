import NavBarHome from "../components/NavBarHome";
import "../styles/NavBarHome.css";
// import OrdersPage from "./OrdersPage";
// import InsightsPage from "./InsightsPage";
// import WhatsappPage from "./WhatsappPage";
const Home = () => {
  return (
    <div className="container2">
      <div style={{ gridColumn: "1 / -1", marginTop: "30px" }}>
        <NavBarHome />
      </div>
    </div>
  );
};

export default Home;
