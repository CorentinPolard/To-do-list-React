# Documentation du projet React

## 1. À quoi sert Node.js dans un projet web ?

Node.js est un environnement d’exécution JavaScript côté serveur. Il permet de lancer du code JavaScript hors d’un navigateur et de gérer les dépendances d’un projet web via **npm** (Node Package Manager).  
Dans un projet React, Node.js est utilisé pour installer les bibliothèques nécessaires, lancer le serveur de développement, compiler le code.

---
## 2. Logique de base de React

React est une bibliothèque JavaScript pour construire des interfaces utilisateur à partir de composants.  
React est principalement utilisée pour le front-end, mais peut aussi être rendue côté serveur (avec le framework Next.js, par exemple).  
React utilise une représentation virtuelle du DOM (**virtual DOM**) pour mettre à jour uniquement ce qui change, ce qui le rend rapide et efficace.

1. **JSX**

    JSX est une syntaxe qui permet d’écrire du HTML directement dans du JavaScript.  
    Elle est utilisée dans React pour définir l’interface des composants de manière déclarative.  

2. **Composant**

    Un composant est une fonction qui retourne du JSX. Chaque composant peut gérer son propre état et être combiné pour former des applications complexes.  
    Un composant commence toujours par une majuscule.

3. **Propriétés (Props)**

    Une **prop** est une donnée passée à un composant permettant de le rendre réutilisable.  
    Les props sont **immutables** dans le composant enfant : on ne peut pas les modifier directement, on peut seulement les utiliser ou les transformer localement dans un état.

4. **Hooks**

    Les hooks permettent d’ajouter des fonctionnalités (comme l’état ou le cycle de vie) aux composants fonctionnels.

5. **useState**

    Permet à un composant fonctionnel de garder et gérer son 
    état interne.
    ```javascript
    const [message, setMessage] = useState("Ceci est le message par défaut");
    ```

---
## 3. Installation de Node.js et création du projet React via vite

### Étapes d’installation

1. **Installer Node.js**  
   - Télécharger et installer la version **v22.18.0** depuis [https://nodejs.org](https://nodejs.org).  
   - Vérifier l’installation :  
     ```bash
     node -v
     npm -v
     ```

2. **Créer un projet React avec Vite**  
   ```bash
   npm create vite@latest *nomProjet -- --template react
   cd *nomProjet
   npm install
   ```

---
## 4. Difficultés rencontrées et solutions adoptées
La principale difficulté rencontrée a été la syntaxe de React, notamment le JSX, qui diffère légèrement du JavaScript classique. Cette difficulté a été surmontée en se renseignant sur la syntaxe, en lisant la documentation officielle et en pratiquant et en s'exerçant sur la création de composants simples.
