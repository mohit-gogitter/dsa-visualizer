import React, { useState } from "react";

type SearchAlgorithm = "linear" | "binary";

const SearchComponent: React.FC = () => {
  const [arrayInput, setArrayInput] = useState<string>("");
  const [array, setArray] = useState<number[]>([]);
  const [searchItem, setSearchItem] = useState<number | null>(null);
  const [algorithm, setAlgorithm] = useState<SearchAlgorithm>("linear");
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const handleArraySubmit = () => {
    const parsedArray = arrayInput.split(",").map((num) => parseInt(num.trim(), 10));
    setArray(parsedArray);
    setFoundIndex(null); // Reset highlight
  };

  const handleSearch = () => {
    if (searchItem === null) return;

    let index: number | null = null;
    if (algorithm === "linear") {
      index = linearSearch(array, searchItem);
    } else if (algorithm === "binary") {
      const sortedArray = [...array].sort((a, b) => a - b); // Binary search needs sorted array
      index = binarySearch(sortedArray, searchItem);
      setArray(sortedArray); // Update UI to show sorted array
    }
    setFoundIndex(index);
  };

  const linearSearch = (arr: number[], item: number): number | null => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return null;
  };

  const binarySearch = (arr: number[], item: number): number | null => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === item) return mid;
      if (arr[mid] < item) left = mid + 1;
      else right = mid - 1;
    }

    return null;
  };

  const handleReset = () => {
    setArrayInput("");
    setArray([]);
    setSearchItem(null);
    setAlgorithm("linear");
    setFoundIndex(null);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Search Algorithm Visualizer</h2>

      {/* Array Input Section */}
      <div className="mb-4">
        <label className="block mb-2">Enter Array (comma-separated):</label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="e.g., 1, 3, 5, 7, 9"
        />
        <button
          onClick={handleArraySubmit}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Array
        </button>
      </div>

      {/* Search Input Section */}
      <div className="mb-4">
        <label className="block mb-2">Enter Item to Search:</label>
        <input
          type="number"
          value={searchItem || ""}
          onChange={(e) => setSearchItem(Number(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="e.g., 5"
        />
      </div>

      {/* Algorithm Selection Section */}
      <div className="mb-4">
        <label className="block mb-2">Select Algorithm:</label>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as SearchAlgorithm)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="linear">Linear Search</option>
          <option value="binary">Binary Search</option>
        </select>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>

      {/* Array Display Section */}
      <div className="grid grid-cols-12 gap-2">
        {array.map((item, index) => (
          <div
            key={index}
            className={`px-4 py-2 text-center border ${
              index === foundIndex ? "bg-yellow-400" : "bg-gray-200"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Search Result */}
      {foundIndex !== null && (
        <p className="mt-4 text-green-700">Item found at index: {foundIndex}</p>
      )}
      {foundIndex === null && searchItem !== null && (
        <p className="mt-4 text-red-700">Item not found.</p>
      )}
    </div>
  );
};

export default SearchComponent;
