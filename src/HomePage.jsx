import SideBar from "./pages/SideBar";
import MainContent from "./pages/MainContent";

function HomePage() {
  return (
    <div className="flex h-screen bg-black">
      <SideBar />
      <div className="w-full p-2 h-full" >
        <MainContent />
      </div>
     
    </div>
  );
}

export default HomePage;