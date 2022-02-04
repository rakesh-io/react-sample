import axios from "axios";
import { useState } from "react";
import { MyContext } from "../context";

export default function (props) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    cars: 'audi',
    gender: 'female',
    hobbies: [],
  });

  const clickHandler = () => {
    console.log('Form ->', form);
  };

  const handleCheckbox = (event) => {
    console.log(event.target.checked, event.target.value);
    const value = event.target.checked
      ? [...form.hobbies, event.target.value]
      : form.hobbies.filter((hobby) => hobby !== event.target.value);
    setForm({
      ...form,
      hobbies: value,
    });
  };

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    // this.setState({
    //   ...state,
    //   [event.target.name]: event.target.value
    // })
  };

  const handleFile = (event) => {
    setForm({
      ...form,
      placeImg: event.target.file
    })
  }

  const submitForm = () => {
    // const params = new URLSearchParams();
    // params.append('placeImg', form.placeImg);
    // axios.post('http://localhost:5000/places/createPlace', params)
  }
  return (
    <>
    <MyContext.Provider value={{}}>
      <h1>Sample Form</h1>
      <form>
        <input type='text' name='firstname' onChange={changeHandler} value={form.firstname} />
        <input type='text' name='lastname' onChange={(event) => changeHandler(event, 'rakesh')} value={form.lastname} />
        <select name='cars' value={form.cars} onChange={changeHandler}>
          <option value={'volvo'}>Volvo</option>
          <option value={'audi'}>Audi</option>
          <option value={'benz'}>Benz</option>
        </select>
        <input
          name='gender'
          onChange={changeHandler}
          type='radio'
          value='male'
          checked={form.gender === 'male'}
        />{' '}
        Male
        <input
          name='gender'
          onChange={changeHandler}
          type='radio'
          value='female'
          checked={form.gender === 'female'}
        />{' '}
        Female
        <input
          type='checkbox'
          name='reading'
          value='reading'
          checked={form.hobbies.includes('reading')}
          onChange={handleCheckbox}
        /> Reading
        <input
          type='checkbox'
          name='swimming'
          value='swimming'
          checked={form.hobbies.includes('swimming')}
          onChange={handleCheckbox}
        /> Swimming
        <button type='button' onClick={clickHandler}>
          Click me
        </button>
        <input type="file" name="placeImg" onChange={handleFile} />
        <button type='button' onClick={submitForm}>
          Submit
        </button>
      </form>
      </MyContext.Provider>
    </>
  );
}
