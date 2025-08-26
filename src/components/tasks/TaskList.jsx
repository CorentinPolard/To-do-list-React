import { useState } from 'react';
import addTask from './AddTask';
import SingleTask from './SingleTask';

export default function TaskList() {
    // Liste de tâches initiale
    if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

    // ID pour la prochaine tâche
    const [taskId, setTaskId] = useState(tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1);

    // Nouvelle tâche
    const [task, setTask] = useState({ id: taskId, label: "", completed: false });

    function toggleCompleted(id) {
        // Modifie la liste de tâches
        // Pour chaques tâches, laisse telle quelle si l'id ne correspond pas, modifie le status si l'id correspond
        const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    return (
        <section>
            <h2>Liste des tâches</h2>
            <form className="add-task" onSubmit={(e) => addTask(e, tasks, setTasks, task, setTask, taskId, setTaskId)}>
                <input type="text" placeholder="Nouvelle tâche" value={task.label} onChange={(e) => setTask({ id: taskId, label: e.target.value, completed: false })} />
                <button type="submit">Ajouter</button>
            </form>
            <ul className="task-list">
                {tasks.map((element) => {
                    return (
                        <SingleTask key={element.id} element={element} tasks={tasks} setTasks={setTasks} toggleCompleted={toggleCompleted} />
                    );
                })}
            </ul>
        </section>
    );
}