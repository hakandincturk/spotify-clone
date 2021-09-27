import SideBar from "components/SideBar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";

function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
        <BottomBar />
    </>
  );
}

export default App;
