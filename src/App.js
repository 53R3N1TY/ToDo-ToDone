import React from 'react'
import './App.css'
import Header from './Header'
import ToDoItem from './ToDoItem'
import Footer from './Footer'
import list from './list'


/* *****Example of functional component***** 
function App() {
  const listComponent = list.map(todoitem => <ToDoItem key={todoitem.id} item={todoitem.item} time={todoitem.time} completed={todoitem.completed}/>)

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        <h3 style={{margin:-10}}>To do list</h3>      
        {listComponent}
      </div>
      <Footer />
    </div>
  );
}
*/


/* *****Example of class base component***** */
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos : list
    }
  }
  render() {  
    const listComponent = this.state.todos.map(todoitem => <ToDoItem key={todoitem.id} item={todoitem.item} time={todoitem.time} completed={todoitem.completed}/>)

    return (
      <div className="App">
        <Header />
        <div className="todo-list">
          <h3 style={{margin:-10}}>To do list</h3>      
          {listComponent}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
