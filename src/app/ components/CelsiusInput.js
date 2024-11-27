function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Celsius:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      ></input>
    </div>
  );
}

export default CelsiusInput;
