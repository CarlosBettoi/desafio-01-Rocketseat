import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

const LOCAL_STORRAGE_KEY = "todo:savedTasks"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
 
  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTasksAndSave (newTasks:ITask) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORRAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask (taskTitle:string) {
    setTasksAndSave([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]) 

  }  

  function deleteTaskById (taskId: string) {
      const newTasks  = tasks.filter(task => task.id !== taskId)
      setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById (taskId: string){
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }

      }

      return task

    }) 
    setTasksAndSave(newTasks)

  }

  return (
    <>
    <Header onAddTask={addTask}/>
    <Tasks 
      tasks={tasks}
      onDelete = {deleteTaskById}
      onComplete={toggleTaskCompletedById}
      />
    
    </>
  )
}

export default App
