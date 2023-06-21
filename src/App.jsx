
import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import TaskList from "./components/TaskList"
import TodoContext from "./context/todoContext"
import data from "./data/tasksList.json"

function App() {
  const [taskList, setTaskList] = useState(data.tasksList)
  return <div className="h-screen px-20 text-gray-600">
    <TodoContext.Provider value={[taskList, setTaskList]} >
      <Navbar />
      <div className=" mt-40 flex flex-row lg:flex-col w-full h-5/6">
        <Sidebar />
        <TaskList />
      </div>
    </TodoContext.Provider>
  </div>
}

export default App
