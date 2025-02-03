import React, { createContext, useContext, useState } from "react";

// Create the Context
const CountContext = createContext();

function UseContextPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-container">
      <div className="p-4">
        <h1>useContext Example</h1>
        {/* Wrap the components with the Context Provider */}
        <CountContext.Provider value={count}>
          <ParentComponent />
        </CountContext.Provider>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}

// Parent component no longer needs props
function ParentComponent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  // Use the context to get the count value directly
  const count = useContext(CountContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>User: {count}</p>
    </div>
  );
}

export default UseContextPage;
