import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/Counter";
import ThemeToggle from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";  

function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Notification hasNewMassages  =  {true} />
      <Dashboard IsLoggedIn = {true} />
      <Inputer />
      <Greeting name="Mohamed" surname="Abdi" />
      <WelcomeMessage isLoggedIn = {false}/>
      <Clicker />
      <Greeting name="Mohamed" surname="Abdi" />
      <Tiriye />
    </>
  );
}

export default App;
