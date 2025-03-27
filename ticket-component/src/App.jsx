import "./App.css";
import Ticket from "./Ticket";

function App() {
  return (
    <>
    <Ticket ticket={[0, 1, 2]} />
    <Ticket ticket={[4, 6, 9, 7]} />
    <Ticket ticket={[1, 5, 7, 4, 8]} />
    </>
  );
}

export default App;
