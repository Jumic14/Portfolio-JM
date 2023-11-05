import html from "./../assets/certificates/1-html-css.jpg";
import terminal from "./../assets/certificates/2-terminal.jpg";
import algorithmes from "./../assets/certificates/3-algorithmes.jpg";
import git from "./../assets/certificates/4-git.jpg";
import python from "./../assets/certificates/5-python.jpg";
import env from "./../assets/certificates/6-env-front-end.jpg";
import informatique from "./../assets/certificates/7-projet-informatique.jpg";
import figma from "./../assets/certificates/8-maquette-figma.jpg";
import js from "./../assets/certificates/9-programmer-avec-js.jpg";
import web from "./../assets/certificates/10-pages-web-js.jpg";
import api from "./../assets/certificates/11-api-rest.jpg";
import react from "./../assets/certificates/12-react.jpg";
import reactapp from "./../assets/certificates/13-application-react.jpg";
import fullstack from "./../assets/certificates/14-nodejs-express-mongodb.jpg";
import seo from "./../assets/certificates/15-seo.jpg";
import agile from "./../assets/certificates/16-developpeur-agile.jpg";
import projet from "./../assets/certificates/17-gestion-projet-agile.jpg";
import eclipse from "./../assets/certificates/18-java-eclipse.jpg";
import java from "./../assets/certificates/19-java.jpg";

const certifications = [
  {
    id: "1",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Créer votre site web avec HTML5 et CSS3",
    pictures: html,
    skills: [
      "Maîtriser les bases de HTML5",
      "Faire de la mise en forme avec CSS3",
      "Agencer le contenu des pages",
      "Utiliser des fonctionnalités avancées de HTML et CSS",
    ],
  },
  {
    id: "2",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Apprenez à utiliser la ligne de commande dans un terminal",
    pictures: terminal,
    skills: [
      "Découvrir les bases du terminal",
      "Manipuler des fichiers avec un terminal",
    ],
  },
  {
    id: "3",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Découvrez le fonctionnement des algorithmes",
    pictures: algorithmes,
    skills: [
      "Mettre en œuvre un algorithme simple",
      "Sélectionner les bonnes méthodes pour résoudre un problème",
      "Utiliser les notions basiques en programmation : variables, fonctions, boucles et structures conditionnelles",
      "Manipuler les structures de données essentielles : tableaux, listes chaînées, tables de hachage...",
      "Créer des fonctions récursives",
      "Calculer la complexité d’un algorithme",
    ],
  },
  {
    id: "4",
    support: "OpenClassrooms",
    category: "others",
    title: "Gérez du code avec Git et GitHub",
    pictures: git,
    skills: [
      "Installer et configurer Git et GitHub",
      "Utiliser les commandes de base de Git",
      "Corriger les erreurs courantes sur GitHub",
    ],
  },
  {
    id: "5",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Apprenez les bases du langage Python",
    pictures: python,
    skills: [
      "Créer des données avec Python",
      "Gérer la logique d'un programme dans Python",
      "Extraire des données du web avec les packages Python",
    ],
  },
  {
    id: "6",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Mettez en place votre environnement front-end",
    pictures: env,
    skills: ["Mettre en place un environnement de développement front-end"],
  },
  {
    id: "7",
    support: "OpenClassrooms",
    category: "others",
    title: "Gérez votre projet informatique facilement",
    pictures: informatique,
    skills: [
      "Faire des spécifications fonctionnelles",
      "Faire des spécifications techniques",
      "Différencier les tests",
      "Découvrir les valeurs, les principes et les méthodes Agiles",
      "Gérer un projet en utilisant la méthodologie SCRUM",
      "Créer et gérer un Backlog",
    ],
  },
  {
    id: "8",
    support: "OpenClassrooms",
    category: "others",
    title: "Créez une maquette web avec Figma",
    pictures: figma,
    skills: [
      "Structurer un wireframe sur papier",
      "Construire un wireframe avec Figma",
      "Créer une maquette avec Figma",
    ],
  },
  {
    id: "9",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Apprenez à programmer avec JavaScript",
    pictures: js,
    skills: [
      "Utiliser les données et les types de données dans JavaScript",
      "Gérer la logique d`'un programme en JavaScript (conditions, boucles et erreurs)",
      "Écrire du code propre et facile à maintenir à l'aide de méthodes en JavaScript",
    ],
  },
  {
    id: "10",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Créez des pages web dynamiques avec JavaScript",
    pictures: web,
    skills: [
      "Créer une interface web à partir de données existantes",
      "Rendre votre page web interactive",
      "Interagir avec un service web à l’aide d’une API HTTP",
      "Enrichir vos pages web grâce aux librairies",
    ],
  },
  {
    id: "11",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Adoptez les API REST pour vos projets web",
    pictures: api,
    skills: [
      "Utiliser des API REST pour vos projets de code",
      "Formuler des requêtes et envoyer des réponses avec une API REST",
      "Concevoir des API REST",
    ],
  },
  {
    id: "12",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Débutez avec React",
    pictures: react,
    skills: [
      "Comprendre le fonctionnement de React ",
      "Créer une application React complète avec Create React App",
      "Stocker et récupérer des données avec le state et les effets",
    ],
  },
  {
    id: "13",
    support: "OpenClassrooms",
    category: "front-end",
    title: "Créez une application React complète",
    pictures: reactapp,
    skills: [
      "Construire une Single Page Application complète qui respecte une architecture robuste",
      "Maîtriser les hooks",
      "Tester votre application React",
      "Évoluer dans une codebase qui utilise des composants classe",
    ],
  },
  {
    id: "14",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Passez au Full Stack avec Node.js, Express et MongoDB",
    pictures: fullstack,
    skills: [
      "Créer un serveur web simple avec Express",
      "Créer une API REST avec Node, Express et MongoDB",
      "Mettre en place un système d'authentification sur une application Express",
      "Gérer des fichiers utilisateur sur une application Express",
    ],
  },
  {
    id: "15",
    support: "OpenClassrooms",
    category: "others",
    title: "Augmentez votre trafic grâce au référencement naturel (SEO)",
    pictures: seo,
    skills: [
      "Intégrer le référencement Web dans la stratégie marketing d'une organisation",
      "Décrire le fonctionnement des moteurs de recherche",
      "Trouver et analyser les bons mots clés pour votre site",
      "Optimiser votre site en respectant les bonnes pratiques SEO on-page",
      "Accélérer votre progression grâce au SEO off-page",
      "Mesurer l'impact de vos efforts SEO",
    ],
  },
  {
    id: "16",
    support: "OpenClassrooms",
    category: "others",
    title: "Devenez développeur agile",
    pictures: agile,
    skills: ["Intégrer une équipe agile", "Réaliser un Sprint"],
  },
  {
    id: "17",
    support: "OpenClassrooms",
    category: "others",
    title: "Initiez-vous à la gestion de projet agile",
    pictures: projet,
    skills: [
      "Constituer une équipe agile avec le modèle de Tuckman",
      "Intégrer les besoins d'utilisateurs",
      "Utiliser des outils visuels de gestion de projet agile",
    ],
  },
  {
    id: "18",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Installez votre environnement de développement Java avec Eclipse",
    pictures: eclipse,
    skills: [
      "Identifier les outils nécessaires pour coder en Java",
      "Utiliser Eclipse pour coder, tester et structurer vos projets Java",
      "Contribuer à un projet open source avec Eclipse",
    ],
  },
  {
    id: "19",
    support: "OpenClassrooms",
    category: "back-end",
    title: "Apprenez à programmer en Java",
    pictures: java,
    skills: [
      "Gérer les variables d’un programme en Java",
      "Utiliser les principes de programmation orientée objet en Java",
      "Utiliser des principes avancés en Java",
    ],
  },
];

export default certifications;
