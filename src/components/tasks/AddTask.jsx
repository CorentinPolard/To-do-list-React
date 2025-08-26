export default function addTask(e, tasks, setTasks, task, setTask, taskId, setTaskId) {
    if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }

    e.preventDefault();
    // Éviter d'ajouter une tâche vide
    if (task.label.trim() === '') {
        return;
    }
    // Ajouter la nouvelle tâche à la liste
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    // Incrémenter l'id pour la prochaine tâche
    setTaskId(taskId + 1);
    // Réinitialiser le champ de saisie
    setTask({ id: taskId, label: "", completed: false });
}