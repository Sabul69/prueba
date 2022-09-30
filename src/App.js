import "./App.css";
import MainHeader from "./components/general/MainHeader";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex-row justify-center content-center items-center">
      <MainHeader />
      <MainPage />
    </div>
  );
}

export default App;
