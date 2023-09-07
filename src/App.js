import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)
  const bottlesNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const timeNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


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
            {
              bottlesNumbers.map(bottle => (
                <option value={bottle}>{bottle} pulloa</option>
              ))
            }
          </select>
        </div>
        <div>
          <label for="time">Time</label>
          <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
            {
              timeNumbers.map(time => (
                <option value = {time}>{time} tuntia</option>
              ))
            }
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
