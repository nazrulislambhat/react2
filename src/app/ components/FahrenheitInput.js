function FahrenheitInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Fahrenheit:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      ></input>
    </div>
  );
}

export default FahrenheitInput;
