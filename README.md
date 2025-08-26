# To-do-list-React

Une application de gestion de tâches (To-do list) réalisée avec React et Vite.

## Fonctionnalités

- Affichage dynamique de la liste des tâches
- Ajouter une nouvelle tâche
- Marquer une tâche comme complétée ou non
- Supprimer une tâche

## Technologies utilisées

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Installation et configuration du projet

La première étape a été d’installer **Node.js**, version **v22.18.0**, qui fournit l’environnement d’exécution JavaScript côté serveur et le gestionnaire de paquets **npm**.

### Étapes :

1. Téléchargement et installation de Node.js
   - Rendez-vous sur [https://nodejs.org](https://nodejs.org).  
   - Télécharger la version 22.18.0 (LTS).  
   - Lancer l’installeur et suivre les instructions.

2. Vérification de l’installation  
   Dans un terminal :  
   ```bash
   node -v
   npm -v
   ```
3. Clonez le dépôt ou téléchargez les fichiers du projet.
4. Installez les dépendances :
   ```bash
   npm install
   ```
5. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

## Structure du projet

- `src/` : Contient le code source React
  - `App.jsx` : Composant principal
  - `components/tasks/TaskList.jsx` : Gestion de la liste des tâches
  - `App.css` et `index.css` : Styles
- `public/` : Fichiers statiques
- `index.html` : Point d'entrée de l'application

## Exemple d'utilisation

1. Saisissez une nouvelle tâche dans le champ prévu et cliquez sur "Ajouter".
2. Cochez une tâche pour la marquer comme complétée.
3. Supprimez une tâche en cliquant sur le bouton associé.

## Auteur

[CorentinPolard](https://github.com/CorentinPolard)