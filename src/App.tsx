import "./App.css";
import {type SyntheticEvent, useState} from "react";

function App() {

  const [nameInput, setNameInput] = useState<string>();
  const [rideSelect, setRideSelect] = useState<string>('kajak');
  const [timeRange, setTimeRange] = useState<string>("1");
  const [lsuitCheckBox, setLsuitCheckBox] = useState<boolean>(false);
  const [instructorCheckBox, setInstructorCheckBox] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>();
  const [statuteCheckBox, setStatuteCheckBox] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [patentVisibility, setPatentVisibility] = useState<string>("none");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    console.log(event.target);
  }

  function handleNameInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
    console.log(e.target.value);
  }

  function handleRideSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRideSelect(e.target.value);
    console.log(e.target.value);

    priceCalculate(e.target.value, timeRange, lsuitCheckBox, instructorCheckBox);
    if(e.target.value == "omega")
    {
      setPatentVisibility("inherit")
    }
    else{setPatentVisibility("none")}
  }

  function handleTimeRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeRange(e.target.value);
    console.log(e.target.value);

    priceCalculate(rideSelect, e.target.value, lsuitCheckBox, instructorCheckBox);
  }

  function handleLsuitCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLsuitCheckBox(e.target.checked);
    console.log(e.target.checked);

    priceCalculate(rideSelect, timeRange, e.target.checked, instructorCheckBox);
  }

  function handleInstructorCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInstructorCheckBox(e.target.checked);
    console.log(e.target.checked);

    priceCalculate(rideSelect, timeRange, lsuitCheckBox, e.target.checked);
  }

  function handlePaymentMethodChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(e.currentTarget.value);
    console.log(e.target.value);
  }

  function handleStatuteCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStatuteCheckBox(e.target.checked);
    console.log(e.target.checked);

  }

  function priceCalculate(selectionRide :string ,timeCost :string,kapokCheck : boolean, instructorCheck :boolean) {
    let ridePrice: number;
    let cashMoney: number = 0;
    switch (selectionRide) {
      case 'kajak': ridePrice = 20; break;
      case 'rowerWodny': ridePrice = 35; break;
      case 'omega': ridePrice = 150; break;
      default: ridePrice = 1; break;
    }
    cashMoney = parseInt(timeCost) * ridePrice;
    if(kapokCheck){
      cashMoney += 5;
    }
    if(instructorCheck){
      cashMoney += 50 * parseInt(timeCost);
    }
    setPrice(cashMoney);
    console.log(price);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>

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
        <p style={{display: patentVisibility, color: "red"}}> Wymagany jest patent przy użyciu żaglówce!</p>


        <label className="biggerLetters">Godziny: {timeRange}</label>
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

        <p className="priceNotice">Cena zostanie obliczona po stronie serwera</p>
        <p className="thePrice" >OSTATECZNA CENA: {price}zł</p>

        <button type="submit">
          Zarezerwuj
        </button>

      </div>
      </form>
    </div>
  );
}

export default App;