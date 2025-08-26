export default function removeTask(id, tasks, setTasks) {
    // Modifie la liste de tâches 
    // Ajoute toutes les tâches dans tasks qui ont un id différent de celui à supprimer
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}