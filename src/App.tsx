import "./App.css";
import {useState} from "react";

function App() {

  const [nameInput, setNameInput] = useState<string>();
  const [rideSelect, setRideSelect] = useState<string>('kajak');
  const [timeRange, setTimeRange] = useState<string>("1");
  const [lsuitCheckBox, setLsuitCheckBox] = useState<boolean>(false);
  const [instructorCheckBox, setInstructorCheckBox] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>();
  const [statuteCheckBox, setStatuteCheckBox] = useState<boolean>(false);

  function handleNameInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
    console.log(e.target.value);
  }

  function handleRideSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRideSelect(e.target.value);
    console.log(e.target.value);
  }

  function handleTimeRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeRange(e.target.value);
    console.log(e.target.value);
  }

  function handleLsuitCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLsuitCheckBox(e.target.checked);
    console.log(e.target.checked);
  }

  function handleInstructorCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInstructorCheckBox(e.target.checked);
    console.log(e.target.checked);
  }

  function handlePaymentMethodChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(e.currentTarget.value);
    console.log(e.target.value);
  }

  function handleStatuteCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStatuteCheckBox(e.target.checked);
    console.log(e.target.checked);
  }

  return (
    <div className="app-container">

      <h1>Kalkulator wynajmu sprzętu</h1>

      <div className="form-container">

        <label className="biggerLetters">Imię</label>
        <input type="text" name="imie" value={nameInput} onChange={handleNameInputChange}/>

        <label className="biggerLetters">Sprzęt</label>
        <select value={rideSelect} onChange={handleRideSelectChange}>
          <option value="kajak">Kajak (20zł/h)</option>
          <option value="rowerWodny">Rower wodny (35zł/h)</option>
          <option value="omega">Omega (150zł/h)</option>
        </select>


        <label className="biggerLetters">Godziny</label>
        <input
          type="range"
          min="1"
          max="8"
          name="ileGodzin"
          value={timeRange}
          onChange={handleTimeRangeChange}
        />

        <label>
          <input type="checkbox" name="kapok" checked={lsuitCheckBox} onChange={handleLsuitCheckBoxChange} />
          Kapok dla dziecka (+5zł)
        </label>

        <label>
          <input type="checkbox" name="instruktor" checked={instructorCheckBox} onChange={handleInstructorCheckBoxChange} />
          Instruktor (+50zł/h)
        </label>

        <p className="biggerLetters">Płatność</p>

        <label>
          <input type="radio" name="payment" value="Karta" checked={paymentMethod == "Karta"} onChange={handlePaymentMethodChange}/>
          Karta
        </label>

        <label>
          <input type="radio" name="payment" value="Blik" checked={paymentMethod == "Blik"} onChange={handlePaymentMethodChange}/>
          BLIK
        </label>

        <label>
          <input type="checkbox" name="regulamin" checked={statuteCheckBox} onChange={handleStatuteCheckBoxChange} />
          Akceptuję regulamin
        </label>

        <p>Cena zostanie obliczona po stronie serwera</p>

        <button>
          Zarezerwuj
        </button>

      </div>
    </div>
  );
}

export default App;