import removeTask from './RemoveTask';

export default function SingleTask({ element, tasks, setTasks, toggleCompleted }) {
    return (
        <li className="list-element-container">
            {/* Si la task à pour valeur true à l'attribut completed, alors la checkbox est déjà cochée. */}
            <div className="list-element">
                <input type="checkbox" checked={element.completed} onChange={() => toggleCompleted(element.id)} />
                <p className={element.completed ? "completed" : ""}>{element.label}</p>
            </div>
            <p className="remove-task" onClick={() => removeTask(element.id, tasks, setTasks)}>✖</p>
        </li>
    )
}