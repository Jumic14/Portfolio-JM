

const projects = [
    {
        'id': '1',
        'title': 'Booki',
        'cover': 'https://i.imgur.com/nBXajVn.jpg',
        'year': '2023',
        'stack': [
            'HTML5',
            'CSS3'  
        ],
        'pictures': [
            'https://i.imgur.com/nBXajVn.jpg',
            'https://i.imgur.com/pIYyUy6.jpg',
            'https://i.imgur.com/FwMe1k9.jpg',
            'https://i.imgur.com/YZPp1Wr.jpg',
            'https://i.imgur.com/Q1AbrtV.jpg',
            'https://i.imgur.com/lbte4PH.jpg'
        ],
        'repo': 'https://github.com/Jumic14/Booki',
        'intro': 'Création de la page d\'accueil d\'une agence de voyage avec HTML & CSS',
        'context': 'Formation Développeur Web OpenClassrooms - Projet N°2',
        'description': [
            'Premier projet technique de la formation, le but est de créer une page web statique et responsive en partant de ressources que l\'on peut retrouver en situation professionnelle.',
            'Ce projet permet de découvrir et appréhender les langages HTML et CSS, mais également de se familiariser avec des outils incontournables, tels que VSCode, Git et GitHub où encore Figma.',
            'Après avoir suivis les cours à disposition, j\'ai procédé au découpage de la maquette fournie afin de préparer l\'intégration du contenu. J\'ai ensuite codé la page en respectant le découpage afin d\'obtenir un résultat conforme à la maquette.'
        ],
        'skills': [
            'Installer un environnement de développement front-end',
            'Intégrer du contenu conformément à une maquette avec HTML et CSS',
            'Implémenter une interface responsive avec HTML et CSS',
            'Versionner son projet avec Git et GitHub'
        ],
        'ressources':[
            'Maquettes du site Booki',
            'Note de synthèse pour intégration',
        ]
    },
    {
        'id': '2',
        'title': 'Sophie Bluel - Architècte d\'intérieur',
        'cover': 'https://i.imgur.com/7d3YNmS.jpg',
        'year': '2023',
        'stack': [
            'JavaScript',
            'Node.js',
        ],
        'pictures': [
            'https://i.imgur.com/7d3YNmS.jpg',
            'https://i.imgur.com/303BgWW.jpg',
            'https://i.imgur.com/9GRGqLr.jpg',
            'https://i.imgur.com/51pxkb0.jpg',
            'https://i.imgur.com/Y0jbsSn.jpg',
            'https://i.imgur.com/FobH4Tu.jpg',
            'https://i.imgur.com/rnNhajy.jpg',
            'https://i.imgur.com/3kL4JVb.jpg'
        ],
        'repo': 'https://github.com/Jumic14/Portfolio-architecte-sophie-bluel',
        'intro': 'Création d\'une page web dynamique avec JavaScript',
        'context': 'Formation Développeur Web OpenClassrooms - Projet N°3',
        'description': [
            'Dans ce second projet de formation, nous sommes initiés à JavaScript et Node.js. En partant d\'une page statique, nous devons permettre à la cliente de pouvoir se connecter, accéder à ses projets via une modale d\'où elle pourra les gérer.',
            'En plus des cours mis à disposition et des échanges avec la communauté d\'étudiants, ce projet a été l\'occasion de rechercher des solutions par moi-même. J\'ai ainsi trouvé des ressources supplémentaires (tutoriels Grafikart, FromScratch, ...) me permettant de mener ce projet à bien.',
            'Après avoir mis en place la partie connection, j\'ai pu créer la modale grâce aux ressources trouvées lors de mes recherches. J\'ai ensuite pu intégrer les fonctionnalités permettant la visualisation, l\'ajout et la suppression de projet.'
        ],
        'skills': [
            'Manipuler les éléments du DOM avec JavaScript',
            'Gérer les évenements utilisateurs avec JavaScript',
            'Récupérer les données utilisateurs via des formulaires'
        ],
        'ressources':[
            'Code back-end et base de code front-end',
            'Maquette Figma',
            'Kanban de la mission',
        ]
    },
    {
        'id': '3',
        'title': 'Nina Carducci - Photographe',
        'cover': 'https://i.imgur.com/5lNdrgO.jpg',
        'year': '2023',
        'stack': [
            'JavaScript',
        ],
        'pictures': [
            'https://i.imgur.com/5lNdrgO.jpg',
            'https://i.imgur.com/nD2zuFU.png',
            'https://i.imgur.com/7sMKApJ.png',
            'https://i.imgur.com/acS8ZAm.png',
            'https://i.imgur.com/InA7RkP.png',
            'https://i.imgur.com/ghMMgVW.jpg'
        ],
        'repo': 'https://github.com/Jumic14/nina-carducci',
        'intro': 'Optimisation et débug d\'un site de photographe',
        'context': 'Formation Développeur Web OpenClassrooms - Projet N°5',
        'description': [
            'Peu de code à proprement parler pour ce projet, mais une découverte de beaucoup de notions importantes. Ce projet s\'organise autour de 2 axes, le débug et l\'optimisation. En partant d\'un audit préalable réalisé sur le site mis à disposition pour le projet, nous devions corriger un bug de navigation dans la modale, un bug de sélection de filtre et optimiser le site pour améliorer les notes de performances, accessibilité et référencement.',
            'Pour appréhender toutes ces nouvelles notions et nouveaux outils abordés dans ce projet, l\'échange avec les autres étudiants à été capital.',
            'Après avoir réaliser moi-même un audit de début de projet avec Lighthouse, j\'ai commencé par utiliser les Chrome DevTools pour localiser et corriger les bugs. J\'ai ensuite restructuré une partie du code, optimisé les images, minifié des fichiers et nettoyé le dossier principal pour améliorer les performances, l\'accessibilité et le référencement. J\'ai fini par ajouté des balises meta liées aux principaux réseaux sociaux, avant de réaliser un audit final avec Lighthouse et rédiger un rapport d\'optimisation.',
            'Dans ce rapport, j\'ai pu justifié la dernière erreur de contraste restant sur le site, qui résultait d\'une combinaison de couleur peu prononcé. J\'ai choisi de ne pas corriger cette erreur avant de faire un retour au client, puisque cela reviendrait à modifier directement le code couleur de son site. J\'ai donc intégré dans le rapport une explication du problème ainsi que les solutions possibles.'
        ],
        'skills': [
            'Optimiser les performances, le référencement et l\'accessibilité d\'un site web',
            'Débugger un site web grâce aux Chrome DevTools',
            'Rédiger un cahier de recette pour tester un site'
        ],
        'ressources':[
            'Audit Lighthouse initial',
            'Code source du site web'
        ]
    },
    {
        'id': '4',
        'title': 'Kasa',
        'cover': 'https://i.imgur.com/HmFOsSu.jpg',
        'year': '2023',
        'stack': [
            'JavaScript',
            'React'
        ],
        'pictures': [
            'https://i.imgur.com/HmFOsSu.jpg',
            'https://i.imgur.com/fEPIHgV.jpg',
            'https://i.imgur.com/wb84NBw.jpg',
            'https://i.imgur.com/2MGeGPt.jpg',
            'https://i.imgur.com/EmqdaGB.jpg',
            'https://i.imgur.com/hwCzlfp.jpg',
            'https://i.imgur.com/wkE4i4c.jpg'
        ],
        'repo': 'https://github.com/Jumic14/kasa',
        'intro': 'Création d\'une application web de location immobilière avec React',
        'context': 'Formation Développeur Web OpenClassrooms - Projet N°6',
        'description': [
            'Découverte de React avec cet avant dernier projet de la formation. Avec le code du back-end, les codings guidelines du projet et des logements regroupés dans un fichier JSON, nous devions coder l\'application en Reat pour obtenir un résultat fonctionnel, responsive et conforme à la maquette',
            'Les cours mis à disposition par OpenClassrooms m\'ont permis de me plonger dans ce nouveau langage. Les échanges avec la communauté et la documentation officielle de React ont également contribué à la compréhenssion de nouvelles notions, et les heures de pratiques et tests m\'ont permis de réaliser ce projet. ',
            'Après avoir initialisé l\'application avec Create React App et installé React Router, j\'ai pu crée la logique de routage avant de passer aux différentes pages de l\'application.',
            'Je me suis principalement inspiré de ce projet pour réaliser ce portfolio !'
        ],
        'skills': [
            'Développer des éléments de l\'interface d\'un site web grâce à des composants React',
            'Initialiser une application avec Create React App',
            'Configurer la navigation entre les pages de l\'application avec React Router'
        ],
        'ressources':[
            'Coding guidelines du projet',
            'Annonces regroupées dans un fichier JSON',
            'Maquette Figma'
        ]
    },
    {
        'id': '5',
        'title': 'Mon Vieux Grimoire',
        'cover': 'https://i.imgur.com/PiBSsBm.jpg',
        'year': '2023',
        'stack': [
            'Node.js',
            'MongoDB'
        ],
        'pictures': [
            'https://i.imgur.com/PiBSsBm.jpg',
            'https://i.imgur.com/D6F3TI3.jpg',
            'https://i.imgur.com/QlpOTLu.jpg',
            'https://i.imgur.com/myYofvR.jpg',
            'https://i.imgur.com/toQOW85.jpg',
            'https://i.imgur.com/3EBwWO4.jpg'
        ],
        'repo': 'https://github.com/Jumic14/mon-vieux-grimoire',
        'intro': 'Développement du back-end d\'un site de notation de livres',
        'context': 'Formation Développeur Web OpenClassrooms - Projet N°7',
        'description': [
            'Initiation au back-end pour ce dernier projet du parcours OpenClassrooms ! Après avoir récupéré le front-end codé en React, les spécifications fonctionnelles, la maquette et les spécifications techniques de l\'API, notre rôle était de développer la partie back-end de l\'application qui devra permettre de s\'enregistrer sur le site, pouvoir poster un livre, le modifier où le supprimer, mais également d\'accéder aux livres postés par d\'autres utilisateurs et pouvoir les noter. ',
            'Suivre méthodiquement les cours traitant de Node.js, Express et MongoDB permettait de prendre en main et se familiariser avec ces nouveautés. Les différentes documentations offraient des ressources supplémentaires, et comme souvent, la communauté d\'étudiant était plutôt active pour échanger sur ce projet.',
            'La première étape était la configuration d\'un serveur Node pour gérer une application Express et l\'installation d\'une base de données MongoDB. L\'étape suivante était la mise en place d\'un système d\'authentification, avant d\'implémenter les fonctionnalités d\'affichage, de création et de modification. Pour finir le projet, il ne restait plus qu\'à créer la fonctionnalité de notation permettant l\'ajout d\'une note et le calcul de la note moyenne.  '
        ],
        'skills': [
            'Implémenter un modèle logique de données conformément à la réglementation',
            'Stocker des données de manière sécurisée',
            'Mettre en oeuvre des opérations CRUD de manière sécurisée',
        ],
        'ressources': [
            'Spécifications fonctionnelles et maquette Figma',
            'Code front-end',
            'Spécifications techniques de l\'API'
        ]
    },
]

export default projects