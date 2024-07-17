import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="d-flex">
        <SideBar />
        <h1>Test</h1>
      </div>
    </div>
  );
}
