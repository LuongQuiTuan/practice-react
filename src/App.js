import "./App.scss";
import TableUsers from "./components/TableUsers";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="app-container ">
        <Container>
          <Header />

          <TableUsers />
        </Container>
      </div>
    </>
  );
}

export default App;
