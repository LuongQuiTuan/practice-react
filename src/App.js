import "./App.scss";
import { useState } from "react";
import TableUsers from "./components/TableUsers";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import ModalAddNew from "./components/ModalAddNew";
function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };
  return (
    <div className="app-container ">
      <Container>
        <Header />
        <div className="add-new my-3">
          <span>
            <h3>List Users:</h3>
          </span>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setIsShowModalAddNew(true)}
          >
            Add New User
          </button>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
    </div>
  );
}

export default App;
