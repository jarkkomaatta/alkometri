import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)


  function handleSubmit(e) {
    e.preventDefault()
    let bloodlevel = 0;
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    if (gender === 'male') {
      bloodlevel = gramsLeft / (weight * 0.7)
    }
    else {
      bloodlevel = gramsLeft / (weight * 0.6)
    }
    setResult(bloodlevel)
  }



  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label for="bottles">Bottles</label>
          <select name="bottles" id="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <label for="time">Time</label>
          <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}/>
          <label for="male">Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
          <label for="female">Female</label>
        </div>
        <div>
          <p>Alcohol blood level:</p>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
