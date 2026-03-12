import "./App.css";

function App() {

  return (
    <div className="app-container">

      <h1>Kalkulator wynajmu sprzętu</h1>

      <div className="form-container">

        <label className="biggerLetters">Imię</label>
        <input type="text" />

        <label className="biggerLetters">Sprzęt</label>
        <select>
          <option>Kajak (20zł/h)</option>
          <option>Rower wodny (35zł/h)</option>
          <option>Omega (150zł/h)</option>
        </select>


        <label className="biggerLetters">Godziny</label>
        <input
          type="range"
          min="1"
          max="8"
        />

        <label>
          <input type="checkbox" />
          Kapok dla dziecka (+5zł)
        </label>

        <label>
          <input type="checkbox" />
          Instruktor (+50zł/h)
        </label>

        <p className="biggerLetters">Płatność</p>

        <label>
          <input type="radio" name="payment" />
          Karta
        </label>

        <label>
          <input type="radio" name="payment" />
          BLIK
        </label>

        <label>
          <input type="checkbox" />
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