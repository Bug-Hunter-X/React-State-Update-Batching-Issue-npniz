```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // This log will show the count, but it will also show the value before the update 
    return () => {
      // Cleanup function
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This line will be ignored, because state updates are batched 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```