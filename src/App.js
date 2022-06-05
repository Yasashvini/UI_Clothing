import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import SideMenu from "./SideNavigation/SideMenu";
import Footer from "./Footer/Footer";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
