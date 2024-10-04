import { useEffect, useState } from "react";





function App() {
  
  const [completedBtn, setCompletedBtn] = useState(false)
  const [completedItems, setCompletedItems] = useState([])


  const [activeBtn, setActiveBtn] = useState(false)
  const [activeItems, setActiveItems] = useState([])
  const [activeItemsLength, setActiveItemsLength] = useState("")

  const [allBtn, setAllBtn] = useState(true)
  //const [changeTodo, setChangeTodo] = useState("")

  const [isChecked, setIsChecked] = useState(false);
  const [todo, setTodo] = useState({
    text: "",
    chbox: isChecked,
  })
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const checkNumb = todos.filter((item)=>item.chbox === false)
    setActiveItemsLength(checkNumb.length)

    const activeFilter = todos.filter((item) => (item.chbox === false))
    setActiveItems(activeFilter)

    const completedFilter = todos.filter((item) => (item.chbox === true))
    setCompletedItems(completedFilter)


  },[todos,activeItemsLength,todo])

  //Add Todo
  const newTodoFunc = (e) => {
    setTodo({
      text: e.target.value,
      chbox: isChecked,
    })
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos(prev => [...prev, todo])
      setTodo({
        text: "",
        chbox: isChecked,
      })
    }
  }

  //Remove Todo
  const removeTodo = (item) => {
    const removeTodo = todos.filter((items) => items.text !== item.text)
    setTodos(removeTodo)
  }

  //Checkbox change 
  const handleCheckboxChange = (idx) => {
    const newData = [...todos]; //Orijinal array'i değiştirmeden kopyalıyoruz
    newData[idx].chbox = !newData[idx].chbox; // Checkbox durumunu tersine çeviriyoruz
    setTodos([...newData]); // Yeni array'i state'e set ediyoruz
  }

  //Active Table
  const activeItemFunc = () => {
    setActiveBtn(true)
    setAllBtn(false)
    setCompletedBtn(false)
    
  }
  const completedItemFunc = () => {
    setActiveBtn(false)
    setAllBtn(false)
    setCompletedBtn(true)
  }
  const allItemFunc = () => {
    setActiveBtn(false)
    setAllBtn(true)
    setCompletedBtn(false)
  }

  //All Delete
  const deleteCompleted = () => {
    const removeTodos = todos.filter((items) => items.chbox !== true)
    setTodos(removeTodos)
  }

  //All Checkbox check
  const allCheckFunc = () =>{
    const newDatas = [...todos]; //Orijinal array'i değiştirmeden kopyalıyoruz
    
    for (let i = 0; i < newDatas.length; i++) {
      newDatas[i].chbox = true
      
    }
    setTodos(newDatas)
  }

  
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              onKeyDown={handleKeyDown}
              value={todo.text}
              onChange={newTodoFunc}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all" onClick={() => { allCheckFunc() }}>Mark all as complete</label>

          <ul className="todo-list">

            {allBtn && todos?.map((item, idx) => {
              return <li key={idx} className={item.chbox ? "completed" : "null"}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.chbox} onChange={() => { handleCheckboxChange(idx) }} />
                  <label>{item.text}</label>
                  <button className="destroy" onClick={() => { removeTodo(item) }}></button>
                </div>
              </li>
            })}
            {activeBtn && activeItems?.map((item, idx) => {
              return <li key={idx} className={item.chbox ? "completed" : "null"}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.chbox} onChange={() => { handleCheckboxChange(idx) }} />
                  <label>{item.text}</label>
                  <button className="destroy" onClick={() => { removeTodo(item) }}></button>
                </div>
              </li>
            })}
            {completedBtn && completedItems?.map((item, idx) => {
              return <li key={idx} className={item.chbox ? "completed" : "null"}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.chbox} onChange={() => { handleCheckboxChange(idx) }} />
                  <label>{item.text}</label>
                  <button className="destroy" onClick={() => { removeTodo(item) }}></button>
                </div>
              </li>
            })}

          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{activeItemsLength} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={allBtn ? "selected" : "null"} onClick={() => { allItemFunc() }}>
                All
              </a>
            </li>
            <li >
              <a href="#/" className={activeBtn ? "selected" : "null"} onClick={() => { activeItemFunc() }}>Active</a>
            </li>
            <li >
              <a href="#/" className={completedBtn ? "selected" : "null"}  onClick={() => { completedItemFunc() }}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={() => { deleteCompleted() }}>Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;

/*



 value={changeTodo} onClick={(e)=>{changeTodoFunc(item,idx,e)}}
  const changeTodoFunc = (item,e) => {
    setChangeTodo(item.text)
    console.log(e.target.value)
    const newData = [...todos]; //Orijinal array'i değiştirmeden kopyalıyoruz
    newData[idx].text = e.target.value; // Checkbox durumunu tersine çeviriyoruz
    setTodos(newData); // Yeni array'i state'e set ediyoruz
  }
*/


/*

 


*/