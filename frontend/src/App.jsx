import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Hello, FitWithPratham!</h1>
      <p className="text-lg text-gray-700">Click the button to increase the count.</p>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;
