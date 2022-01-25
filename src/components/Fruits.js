import { useState } from "react";

export default function Fruits(props) {
  const [fruits, setFruits] = useState(['grapes', 'bananas', 'pears', 'oranges', 'apples', 'apples']);
    return (
      <div>
        <h2>Fruits</h2>
        <ol>
          { fruits.map((fruit, index) => <li key={index}>{fruit}</li>) }
        </ol>
      </div>
    )
}