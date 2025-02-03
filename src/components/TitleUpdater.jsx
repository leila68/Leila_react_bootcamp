import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      console.log("Component is being unmounted");
    };
  }, [count]); 

  return (
    <div>
      <h1>Current Count: {count}</h1>

      {/* Increase count */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* Decrease count */}
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>

      {/* Display message when count reaches 10 */}
      {count === 10 && <p>Congratulations! You've reached 10!</p>}
    </div>
  );
}

export default TitleUpdater;

