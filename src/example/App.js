import { useState } from "react";
import Modal from "../lib";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setDisplayModal(true)}>Open Modal</button>

      {displayModal && (
        <Modal
          title="Title test"
          text="body test"
          showModal={setDisplayModal}
        />
      )}
    </div>
  );
};

export default App;