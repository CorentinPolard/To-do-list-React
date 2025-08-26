import { useState } from 'react';

export default function TaskList() {
    // Liste de tâches initiale
    const [tasks, setTasks] = useState([
        { id: 1, label: 'Faire les courses', completed: true },
        { id: 2, label: 'Aller à la salle de sport', completed: false },
        { id: 3, label: 'Préparer le repas', completed: true },
        { id: 4, label: 'Lire un livre', completed: false }
    ]);

    // ID pour la prochaine tâche
    const [taskId, setId] = useState(tasks.length + 1);

    // Nouvelle tâche
    const [task, setTask] = useState({ id: taskId, label: "", completed: false });

    const addTask = (e) => {
        e.preventDefault();
        // Éviter d'ajouter une tâche vide
        if (task.label.trim() === '') {
            return;
        }
        // Ajouter la nouvelle tâche à la liste
        setTasks([...tasks, task]);
        // Incrémenter l'id pour la prochaine tâche
        setId(taskId + 1);
        // Réinitialiser le champ de saisie
        setTask({ id: taskId, label: "", completed: false });
    }

    function toggleCompleted(id) {
        // Modifie la liste de tâches
        // Pour chaques tâches, laisse telle quelle si l'id ne correspond pas, modifie le status si l'id correspond
        setTasks(
            tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
        );
    }

    function removeTask(id) {
        // Modifie la liste de tâches 
        // Ajoute toutes les tâches dans tasks qui ont un id différent de celui à supprimer
        setTasks([...tasks].filter(task => task.id !== id));
    }

    return (
        <section>
            <h2>Liste des tâches</h2>
            <form className="add-task" onSubmit={addTask}>
                <input type="text" placeholder="Nouvelle tâche" value={task.label} onChange={(e) => setTask({ id: taskId, label: e.target.value, completed: false })} />
                <button type="submit">Ajouter</button>
            </form>
            <ul className="task-list">
                {tasks.map((element) => {
                    return (
                        <li className="list-element-container" key={element.id} >
                            {/* Si la task à pour valeur true à l'attribut completed, alors la checkbox est déjç cochée. */}
                            <div className="list-element">
                                <input type="checkbox" checked={element.completed} onChange={() => toggleCompleted(element.id)} />
                                <p className={element.completed ? "completed" : ""}>{element.label}</p>
                            </div>
                            <p className="remove-task" onClick={() => removeTask(element.id)}>✖</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}