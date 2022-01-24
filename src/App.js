import { useState } from 'react';
import './App.css';
import ButtonsProblem from './components/ButtonProblem';
import Form from './components/Form';
import Fruits from './components/Fruits';
import { Vegetables } from './components/Vegetables';

function App() {
  const fruits = ['grapes', 'bananas', 'pears', 'oranges', 'apples', 'apples'];
  const veggies = ['potato', 'cucumber'];
  const show = true;
  const showFruits = true;

  const [showVeg, setShowVeg] = useState(true);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    cars: 'audi',
    gender: 'female',
    reading: false
  });

  const clickHandler = () => {
    console.log('Form ->', form);
  }
  const changeHandler = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setForm({
      ...form,
      [event.target.name]: value
    })
  }

  const handleVegetable = () => {
    console.log('handle Vegetable called');
    setShowVeg(!showVeg);
    console.log(showVeg);
  }

  if(show === true) {
    return (
      <div>
        <h1>Hello World!</h1>
        <Form clickHandler={clickHandler} changeHandler={changeHandler} form={form} />
        { showFruits &&  <Fruits fruits={fruits} />}
        { showVeg ? <Vegetables veg={veggies}/> : <h4>Veggies not visible</h4>}
        <button type="button" onClick={handleVegetable}>Toggle Vegetables</button>
        <ButtonsProblem />
      </div>
    );
  }

  return <h1>Not Found</h1>

}
export default App;
