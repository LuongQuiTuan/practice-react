import "./App.scss";

import TableUsers from "./components/TableUsers";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="app-container ">
      <Container>
        <Header />
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
