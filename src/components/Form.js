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
        value='reading'
        checked={props.form.hobbies.includes('reading')}
        onChange={props.handleCheckbox}
      /> Reading
      <input
        type='checkbox'
        name='swimming'
        value='swimming'
        checked={props.form.hobbies.includes('swimming')}
        onChange={props.handleCheckbox}
      /> Swimming
      <button type='button' onClick={props.clickHandler}>
        Click me
      </button>
    </form>
  );
}
