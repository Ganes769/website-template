import { useEffect, useState } from "react";

const AutoCounter = ({ title, totalCount, hasPlus, timeoutInterval = 50 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Define a function to increment the count by 1 and stop at 10
    const incrementCounter = () => {
      if (count < totalCount) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId); // Clear the interval when count reaches 10
      }
    };

    // Use setInterval to increment the count every second
    const intervalId = setInterval(incrementCounter, timeoutInterval);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [count, totalCount, timeoutInterval]);

  return (
    <div className="text-center mb-6">
      <p className="text-blue-600 font-semibold text-3xl mb-1">{count} {hasPlus && "+"}</p>
      <p className="p uppercase font-semibold">{title}</p>
    </div>
  );
};

export default AutoCounter;