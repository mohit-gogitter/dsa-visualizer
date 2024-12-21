import React from 'react';

interface VisualizerProps {
  steps: number[][];
}

const Visualizer: React.FC<VisualizerProps> = ({ steps }) => {
  const currentStep = steps[steps.length - 1] || [];
  return (
    <div className="flex items-end space-x-1 mt-4">
      {currentStep.map((value, idx) => (
        <div
          key={idx}
          className="bg-blue-500"
          style={{
            height: `${value * 10}px`,
            width: '20px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Visualizer;
