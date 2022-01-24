export default function Fruits(props) {
    return (
      <div>
        <h2>Fruits</h2>
        <ol>
          { props.fruits.map((fruit, index) => <li key={index}>{fruit}</li>) }
        </ol>
      </div>
    )
}