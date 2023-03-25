import todoLogo from "../../assets/Logo.svg"; 
import {AiOutlinePlusCircle} from 'react-icons/ai';

import styles from './header.module.css'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm}>
                <input placeholder="Adicione uma nova tarefa"  /> 

                <button>
                  Criar
                  <AiOutlinePlusCircle/>


                </button>


            </form>



        </header>
    )
}