// import logo from './logo.svg';
import './App.css';
import React from "react";
import Pokemon from "./components/pokemon";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       todos: [
//         {
//           id: 1,
//           title: "mengerjakan react"
//         },
//         {
//           id: 2,
//           title: "mengerjakan vue"
//         },
//       ],
//       loginStatus: false
//     };
//     this.handleTitleChange = this.handleTitleChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleLoginChange = this.handleLoginChange.bind(this);
//   }

//   handleTitleChange(event) {
//     console.log(event)
//     this.setState({
//       title: event.target.value
//     })
//   }

//   handleFormSubmit(event) {
//     event.preventDefault();

//     const { title, todos } = this.state;
//     const id = todos.length + 1;
//     const newTodo = {id, title};

//     this.setState({
//       todos: todos.concat(newTodo)
//     })
//   }

//   handleLoginChange(event) {
//     console.log(event, "ini dari sini")
//     this.setState({
//       loginStatus: true
//     })
//   }

//   fetchPokemon() {

//   }

//   render () {
//     const {title, todos, loginStatus} = this.state;
    
//     return (
//       <div>
//         <h1>Todolist</h1>
//         <p>Welcome to my Todolist</p>
//         {loginStatus ? 
//           <>
//             <form onSubmit={this.handleFormSubmit}>
//               <input
//                 type="text"
//                 autoComplete="off"
//                 placeholder="Title"
//                 value={title}
//                 onChange={this.handleTitleChange}
//               />
//               <input type="submit" />
//             </form>
//             <ul>
//               {todos.map((todo) => (
//                 <li key={todo.id}>{todo.title}</li>
//               ))}
//             </ul>
//           </> 
//           :
//           <button onClick={this.handleLoginChange}>Click here to login</button>
//         }
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headline: "Find Your Pokemon!"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Pokemon Website</h1>
        <div className="container">
          <Pokemon></Pokemon>
        </div>
      </div>
    )
  }
}

export default App;
