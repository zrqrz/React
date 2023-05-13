import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //useState is a react hook, which always returns an array with two elements.
  //The first element is the current state snapshot, as the second element is a function that is used to change the state
  //modalIsOpen is initially false
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
