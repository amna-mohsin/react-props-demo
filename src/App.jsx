import React, { useState } from "react";
import "./App.css";

// GrandChild Component
function GrandChild({ message, changeMessage }) {
  return (
    <div className="grandchild">
      <p>GrandChild sees message: {message}</p>
      <button onClick={() => changeMessage("Message updated by GrandChild!")}>
        Update Message
      </button>
    </div>
  );
}

// Child Component
function Child({ message, changeMessage }) {
  return (
    <div className="child">
      <p>Child sees message: {message}</p>
      <button onClick={() => changeMessage("Message updated by Child!")}>
        Update Message
      </button>
      {/* Passing props to GrandChild (Prop Drilling Example) */}
      <GrandChild message={message} changeMessage={changeMessage} />
    </div>
  );
}

// Parent Component (App)
function App() {
  const [message, setMessage] = useState("Hello from Parent!");

  const handleChangeMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      {/* Passing props to Child */}
      <Child message={message} changeMessage={handleChangeMessage} />
    </div>
  );
}

export default App;
