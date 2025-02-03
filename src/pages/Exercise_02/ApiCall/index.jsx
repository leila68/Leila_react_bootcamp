import { useRef, useState } from "react";

function ApiCallPage() {
  const [result, setResult] = useState(null);
  const inputRef = useRef(null); // Step 1: Create a ref

  const handleSearch = async () => {
    const query = inputRef.current.value.trim(); // Step 2: Get value from input
    if (!query) return alert("Please enter a search query.");

    try {
      const response = await fetch(
        `http://numbersapi.com/${encodeURIComponent(query)}?json`
      );
      const data = await response.json();
      setResult(data.text || "No result found.");
    } catch {
      alert("Error fetching data.");
    }
  };

  return (
    <div className="p-4 exercise-container">
      <h1 className="text-xl font-bold mb-4">Number Facts</h1>
      <input
        ref={inputRef} // Step 3: Attach ref to input
        type="text"
        placeholder="Enter a search term"
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold">Search Result:</h2>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}

export default ApiCallPage;
