import { useState } from "react";
import ButtonsProblem from "./ButtonProblem";
import Fruits from "./Fruits";
import Form from "./Form";
import { Vegetables } from './Vegetables';

export default function Home() {
    const veggies = ['potato', 'cucumber'];
    const show = true;
    const showFruits = true;
  
    const [showVeg, setShowVeg] = useState(true);
  
    const handleVegetable = () => {
      console.log('handle Vegetable called');
      setShowVeg(!showVeg);
      console.log(showVeg);
    };
  
    if (show === true) {
      return (
        <div>
          <h1>Hello World!</h1>
          <Form />
          <Vegetables>this is something written here <Fruits /> </Vegetables>
          {showFruits && <Fruits />}
          {showVeg ? <Vegetables veg={veggies} /> : <h4>Veggies not visible</h4>}
          <button type='button' onClick={handleVegetable}>
            Toggle Vegetables
          </button>
          {showVeg &&  <ButtonsProblem /> }
        </div>
      );
    }
  
    return <h1>Not Found</h1>;
  }