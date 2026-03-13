import "./App.css";

function App() {

  return (
    <div className="app-container">

      <h1>Kalkulator wynajmu sprzętu</h1>

      <div className="form-container">

        <label className="biggerLetters">Imię</label>
        <input type="text" name="imie"/>

        <label className="biggerLetters">Sprzęt</label>
        <select>
          <option value="kajak">Kajak (20zł/h)</option>
          <option value="rowerWodny">Rower wodny (35zł/h)</option>
          <option value="omega">Omega (150zł/h)</option>
        </select>


        <label className="biggerLetters">Godziny</label>
        <input
          type="range"
          min="1"
          max="8"
          defaultValue="1"
          name="ileGodzin"
        />

        <label>
          <input type="checkbox" name="kapok"/>
          Kapok dla dziecka (+5zł)
        </label>

        <label>
          <input type="checkbox" name="instruktor"/>
          Instruktor (+50zł/h)
        </label>

        <p className="biggerLetters">Płatność</p>

        <label>
          <input type="radio" name="payment" value="karta"/>
          Karta
        </label>

        <label>
          <input type="radio" name="payment" value="blik"/>
          BLIK
        </label>

        <label>
          <input type="checkbox" name="regulamin"/>
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