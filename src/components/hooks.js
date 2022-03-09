import { useCounter } from './useCounter'

export default function CounterHooks() {
const [ value, isEven, handleIncrement, handleDecrement ]= useCounter();


  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="buttons">
        <button data-testid="increment" onClick={handleIncrement}>Increment</button>
        <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
      </div>
      <p data-testid="count">{value}</p>
      <div className={isEven ? "even" : "odd"}>{ isEven ? "Even" : "Odd"}</div>
    </div>
  );
}

