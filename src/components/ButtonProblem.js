import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context';
import { incrementButtonCounter, setLastButton } from '../store/actions';

export default function ButtonsProblem() {
  // const [buttonCounter, setButtonCounter] = useState(0);
  // const [lastButtonClicked, setLastButtonClicked] = useState(0);
  const buttonCounter = useSelector(state => state.buttonCounter);
  const lastButtonClicked = useSelector(state => state.lastButtonClicked);

  const dispatch = useDispatch();

  const increaseButtonCounter = () => {
    dispatch(incrementButtonCounter());
  }

  const setLastButtonClicked = (index) => {
    dispatch(setLastButton(index))
  }

  const getAllButtons = () => {
    let buttonsArray = [];
    for (let index = 1; index <= buttonCounter; index++) {
      buttonsArray.push(
        <button key={index} onClick={() => setLastButtonClicked(index)}>
          {' '}
          Button No - {index}
        </button>,
      );
    }
    return buttonsArray;
  };

  return (
    <div>
      <h1>Buttons Counter: {buttonCounter}</h1>
      <h1>Last Button Clicked Counter: {lastButtonClicked}</h1>
      <button onClick={increaseButtonCounter}>Add a button</button>
      {getAllButtons()}
    </div>
  );
}

// export default class ButtonsProblem extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Contructor called');
//   }

//   state = {
//     buttonCounter: 0,
//     lastButtonClicked: 0,
//     data: [],
//   };

//   getAllButtons = () => {
//     let buttonsArray = [];
//     for (let index = 1; index <= this.state.buttonCounter; index++) {
//       buttonsArray.push(
//         <button key={index} onClick={() => this.setState({ lastButtonClicked: index })}>
//           {' '}
//           Button No - {index}
//         </button>,
//       );
//     }
//     return buttonsArray;
//   };

//   componentDidMount() {
//     console.log('Mount Complete');
//     // fetch('http://localhost:5000/users/getUsers', { method: 'GET'}).then(res => res.json()).then(result => {
//     //     this.setState({
//     //         data: result
//     //     })
//     // })
//     axios.get('http://localhost:5000/users/getUsers').then((result) => {
//         console.log(result)
//         this.setState({
//         data: result.data,
//         });
//     });
//   }

//   componentDidUpdate() {
//     console.log('Updation complete');
//   }

//   componentWillUnmount() {
//     // all the cleanup related activities
//     console.log('will unmount called');
//   }

//   //   static getDerivedStateFromProps(props, state) {
//   //       console.log('before render');
//   //       return state
//   //   }

//   render() {
//     console.log('render method');
//     if (true) {
//       return (
//         <div>
//           <ol>
//             {this.state.data.map((user) => (
//               <li key={user.id}>{user.name}</li>
//             ))}
//           </ol>
//           <AuthContext.Consumer>
//             {
//               value => <Form value={value} />
//             }
//           </AuthContext.Consumer>
//           <h1>Buttons Counter: {this.state.buttonCounter}</h1>
//           <h1>Last Button Clicked Counter: {this.state.lastButtonClicked}</h1>
//           <button onClick={() => this.setState({ buttonCounter: this.state.buttonCounter + 1 })}>Add a button</button>
//           {this.getAllButtons()}
//         </div>
//       );
//     }
//     return <h1>not found</h1>;
//   }
// }

// 1. Mounting - constructor, render, componentDidMount
// 2. Updating - render, componentDidUpdate
// 3. Unmount - componentDidUnmount
