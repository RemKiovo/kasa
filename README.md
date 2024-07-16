# Kasa - Plateforme de Location d'Appartements

Bienvenue sur le projet Kasa ! Ce projet consiste à développer une nouvelle plateforme web pour Kasa, un leader de la location d'appartements entre particuliers en France.

## Table des matières

1. [Présentation du Projet](#présentation-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Structure du Projet](#structure-du-projet)
7. [Guidelines de Code](#guidelines-de-code)
8. [Ressources](#ressources)

## Présentation du Projet

Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

## Fonctionnalités

- Affichage des annonces de logements.
- Navigation entre les différentes pages via React Router.
- Composant de galerie d'images avec gestion des transitions.
- Composant Collapse pour les sections rétractables.
- Page 404 pour les routes inexistantes.

## Technologies Utilisées

- **React** : Bibliothèque pour construire l'interface utilisateur.
- **React Router** : Gestion des routes de l'application.
- **Sass** : Préprocesseur CSS pour le styling.
- **Vite** : Bundler pour un développement rapide et performant.

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 6 ou supérieure), Yarn ou pnpm

### Étapes d'installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/votre-utilisateur/kasa.git
   cd kasa
   ```

2. Installez les dépendances :

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

   ou

   ```sh
   pnpm install
   ```

3. Lancez le serveur de développement :

   ```sh
   npm run dev
   ```

   ou

   ```sh
   yarn dev
   ```

   ou

   ```sh
   pnpm run dev
   ```

4. Ouvrez votre navigateur et allez à l'adresse [http://localhost:3000](http://localhost:3000)

## Utilisation

### Commandes de développement

- `npm run dev` `pnpm run dev` ou `yarn dev` : Démarre le serveur de développement.
- `npm run build` `pnpm run build` ou `yarn build` : Génère une version optimisée pour la production.
- `npm run serve` `pnpm run serve` ou `yarn serve` : Sert la version optimisée de l'application.

## Structure du Projet

Voici la structure mise à jour du projet Kasa :

```
kasa-web/
│
├── public/ # Fichiers statiques
├── src/
│   ├── assets/ # Images et autres ressources
│   ├── components/ # Composants React
│   │   ├── ComponentName/ # Exemple de dossier pour un composant
│   │   │   ├── index.jsx # Fichier JSX du composant
│   │   │   └── style.scss # Style spécifique au composant
│   ├── pages/ # Pages de l'application
│   │   ├── PageName/ # Exemple de dossier pour une page
│   │   │   ├── index.jsx # Fichier JSX de la page
│   │   │   └── style.scss # Style spécifique à la page
│   ├── main.jsx # Composant principal de l'application
│   ├── main.scss # Feuille de style principal de l'application
│   └── data/ # Fichiers de données (JSON)
│
├── index.html # Fichier HTML principal servant de squelette à l'application.
│
├── .gitignore # Fichiers et dossiers ignorés par Git
├── .eslintrc.cjs # Fichier de configuration ESLint
├── .prettierrc # Fichier de configuration pour Prettier
├── package.json # Dépendances et scripts de l'application
├── vite.config.js # Configuration de Vite
└── README.md # Documentation du projet
```

## Guidelines de Code

Pour garantir la qualité et la maintenabilité du code, veuillez suivre ces recommandations :

- Utiliser des composants fonctionnels de préférence.
- Découper l'application en composants modulaires et réutilisables.
- Un composant par fichier.
- Structurer les fichiers de manière logique.
- Utiliser les props et le state de React de manière appropriée.
- Gérer les événements et utiliser `map` pour les listes.
- La logique du routeur doit être centralisée dans un seul fichier.
- Aucun warning ou erreur ne doit apparaître dans la console.

## Ressources

- [Maquettes Figma](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0)
- [Données JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)
- [Outils et contraintes techniques](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf)
