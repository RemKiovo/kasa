# Kasa - Refonte de la plateforme web

Bienvenue dans le projet de refonte de Kasa, leader de la location d’appartements entre particuliers en France. Ce projet vise à moderniser le site existant avec une nouvelle stack JavaScript, en utilisant React pour le front-end.

## Table des matières

- [Introduction](#introduction)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Informations de Conception](#informations-de-conception)
- [Fonctionnalités](#fonctionnalités)
- [Sources](#sources)

## Introduction

Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Votre mission est de démarrer le projet React, développer l’ensemble de l’application et suivre les maquettes Figma fournies.

## Prérequis

Assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 14 ou plus)
- npm (version 6 ou plus), yarn ou pnpm

## Installation

Clonez le dépôt et installez les dépendances nécessaires :

```bash
npm install
```

## Utilisation

Pour démarrer l'application :

```bash
npm start
```

Cela lancera l'application à `http://localhost:3000`

## Structure du Projet

Voici la structure de base du projet :

```bash
kasa/
│   .gitignore
│   package.json
│   pnpm-lock.yaml
│   README.md
│
├───public/
└───src/
    │   index.jsx
    │   index.scss
    │
    ├───assets/
    │       *.svg
    │       *.png
    │       *.jpg
    │
    ├───components/
    │       *.jsx
    │
    ├───data/
    │       logements.json
    ├───pages/
    │       *.jsx
    │
    ├───services/
    ├───styles/
    │       *.scss
    │
    └───utils/
            fichiers-utilitaires
```

## Informations de Conception

Le design de l'interface est disponible sur Figma. Utilisez les ressources et les prototypes pour vous guider dans le développement des composants et des animations.

### Contraintes Techniques

- Galerie (Gallery) :
  - Navigation circulaire des images.
  - Boutons de navigation masqués s'il n'y a qu'une image.
  - Hauteur fixe de la galerie.
- Collapse :
  - Fermé par défaut à l'initialisation.
  - Toggle à l'ouverture/fermeture par clic utilisateur.

## Fonctionnalités

- Utilisation de React et React Router pour la gestion des routes.
- Composants réactifs selon les maquettes Figma.
- Animations CSS pour les menus déroulants si vous êtes étudiant Développeur Web.

## Sources

[Maquettes Figma](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0)
[Prototypes Figma](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1)
[Coding Guidelines](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf)
[Data utiliser pour ce projet](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)
