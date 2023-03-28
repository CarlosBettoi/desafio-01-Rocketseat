import styles from './tasks.module.css';
import { Task } from "../Task"
import { ITask } from '../../App';

interface Props {
   tasks: ITask[]; 
   onDelete: (taskId:string) => void
}

export function Tasks ({tasks, onDelete}:Props) {

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>

                <div>
                    <p> Tarefas criadas </p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>


                </div>


            </header>

            <div className={styles.list}>
                {tasks.map((task) =>(
                  <Task 
                    key={task.id} 
                    task={task}
                    onDelete={onDelete}
                   />
                ))}
                
               
            </div>

        </section>

    )


}