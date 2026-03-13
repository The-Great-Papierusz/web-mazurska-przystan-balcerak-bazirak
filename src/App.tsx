import "./App.css";
import {useState} from "react";

function App() {

  const [nameInput, setNameInput] = useState<string>();
  const [rideSelect, setSprzetSelect] = useState<string>('kajak');
  const [timeRange, setTimeRange] = useState<number>(1);
  const [lsuitCheckBox, setLsuitCheckBox] = useState<boolean>(false);
  const [instructorCheckBox, setInstructorCheckBox] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>();
  const [statuteCheckBox, setStatuteCheckBox] = useState<boolean>(false);

  return (
    <div className="app-container">

      <h1>Kalkulator wynajmu sprzętu</h1>

      <div className="form-container">

        <label className="biggerLetters">Imię</label>
        <input type="text" name="imie" value={nameInput}/>

        <label className="biggerLetters">Sprzęt</label>
        <select value={rideSelect}>
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
        />

        <label>
          <input type="checkbox" name="kapok" checked={lsuitCheckBox}/>
          Kapok dla dziecka (+5zł)
        </label>

        <label>
          <input type="checkbox" name="instruktor" checked={instructorCheckBox}/>
          Instruktor (+50zł/h)
        </label>

        <p className="biggerLetters">Płatność</p>

        <label>
          <input type="radio" name="payment" value="Karta" checked={paymentMethod == "Karta"}/>
          Karta
        </label>

        <label>
          <input type="radio" name="payment" value="Blik" checked={paymentMethod == "Blik"}/>
          BLIK
        </label>

        <label>
          <input type="checkbox" name="regulamin" checked={statuteCheckBox}/>
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