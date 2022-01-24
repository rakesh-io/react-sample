export default function (props) {
  return (
    <form>
      <input type='text' name='firstname' onChange={props.changeHandler} value={props.form.firstname} />
      <input type='text' name='lastname' onChange={props.changeHandler} value={props.form.lastname} />
      <select name='cars' value={props.form.cars} onChange={props.changeHandler}>
        <option value={'volvo'}>Volvo</option>
        <option value={'audi'}>Audi</option>
        <option value={'benz'}>Benz</option>
      </select>
      <input
        name='gender'
        onChange={props.changeHandler}
        type='radio'
        value='male'
        checked={props.form.gender === 'male'}
      />{' '}
      Male
      <input
        name='gender'
        onChange={props.changeHandler}
        type='radio'
        value='female'
        checked={props.form.gender === 'female'}
      />{' '}
      Female
      <input
        type='checkbox'
        name='reading'
        checked={props.form.reading}
        onChange={props.changeHandler}
      /> Reading
      <button type='button' onClick={props.clickHandler}>
        Click me
      </button>
    </form>
  );
}
