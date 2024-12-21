import React, { useState } from 'react';
import Visualizer from '../components/Visualizer.tsx';

const Sorting: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number[][]>([]);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState<string>('bubbleSort');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value
      .split(',')
      .map((v) => parseInt(v.trim()))
      .filter((v) => !isNaN(v));
    setArray(values);
    setCurrentStep([values]);
  };

  const bubbleSort = () => {
    const arr = [...array];
    let i = 0,
      j = 0;

    const interval = setInterval(() => {
      if (i < arr.length - 1) {
        if (j < arr.length - i - 1) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
          j++;
        } else {
          j = 0;
          i++;
        }
      } else {
        clearInterval(interval);
        setSorting(false);
      }
      setCurrentStep((prev) => [...prev, [...arr]]);
    }, 50);
  };

  const selectionSort = () => {
    const arr = [...array];
    let i = 0,
      j = 0,
      minIdx = 0;

    const interval = setInterval(() => {
      if (i < arr.length - 1) {
        if (j < arr.length) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
          j++;
        } else {
          if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
          }
          i++;
          j = i;
          minIdx = i;
        }
      } else {
        clearInterval(interval);
        setSorting(false);
      }
      setCurrentStep((prev) => [...prev, [...arr]]);
    }, 50);
  };

  const quickSortHelper = (arr: number[], low: number, high: number, steps: number[][]) => {
    if (low < high) {
      const pivotIdx = partition(arr, low, high, steps);
      quickSortHelper(arr, low, pivotIdx - 1, steps);
      quickSortHelper(arr, pivotIdx + 1, high, steps);
    }
  };

  const partition = (arr: number[], low: number, high: number, steps: number[][]): number => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([...arr]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push([...arr]);
    return i + 1;
  };

  const quickSort = () => {
    const arr = [...array];
    const steps: number[][] = [];
    quickSortHelper(arr, 0, arr.length - 1, steps);
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep((prev) => [...prev, step]);
      }, index * 50);
    });
    setTimeout(() => setSorting(false), steps.length * 50);
  };

  const startSort = () => {
    if (array.length === 0 || sorting) return;
    setSorting(true);
    switch (algorithm) {
      case 'bubbleSort':
        bubbleSort();
        break;
      case 'selectionSort':
        selectionSort();
        break;
      case 'quickSort':
        quickSort();
        break;
      default:
        setSorting(false);
        break;
    }
  };

  const reset = () => {
    setArray([]);
    setCurrentStep([]);
    setSorting(false);
    setAlgorithm('bubbleSort');
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Sorting Visualizer</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <input
          type="text"
          className="border border-gray-400 bg-white text-gray-800 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter numbers separated by commas"
          onChange={handleInputChange}
          disabled={sorting}
        />
        <select
          className="border border-gray-400 bg-white text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={sorting}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="quickSort">Quick Sort</option>
        </select>
        <button
          className={`px-6 py-2 rounded font-semibold transition-colors duration-300 ${
            sorting ? 'bg-gray-400' :  'bg-green-600 text-white rounded hover:bg-green-700'
          }`}
          onClick={startSort}
          disabled={sorting}
        >
          {sorting ? 'Sorting...' : 'Sort'}
        </button>
        <button
          className="px-6 py-2 rounded font-semibold transition-colors duration-300 bg-gray-400 hover:bg-gray-500"
          onClick={reset}
          disabled={sorting}
        >
          Reset
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <Visualizer steps={currentStep} />
      </div>
    </div>
  );
};

export default Sorting;
