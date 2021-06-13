import React from "react"

//import todoitem
import ToDoItem from "./component/todoItem"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ToDoItem />
            </div>
        
        )
    }
}
export default App

//klo mau import lagi, di apps di masukin navbar (klo mau ngasih navbar)
//inget return harus cuma ada 1 kompnent saja