// document.getElementById("switch").addEventListener("change", theme);

// function theme(){
//     const label = document.querySelector('label[for="switch"]');
//     const body = document.getElementById('body');
//     const header = document.getElementById('header');
//     const svgdiv = document.getElementById("svgdiv");
//     const logoSrc = document.getElementById('logo');
//     if (checkbox.checked) {
//         body.classList.add('bg-[#141004]');

//         header.classList.remove('bg-[#143095]');
//         header.classList.add('bg-[#5f4e0c]');

//         label.classList.remove('bg-[#D49286]');
//         label.classList.add('bg-yellow-400');

//         svgdiv.classList.remove('text-[#D49286]');
//         svgdiv.classList.add('text-yellow-400');
//         logoSrc.src = "images/logoYellow-re.png";

//     } else {
//         body.classList.remove('bg-[#141004]');

//         header.classList.remove('bg-[#5f4e0c]');
//         header.classList.add('bg-[#143095]');

//         label.classList.remove('bg-yellow-400');
//         label.classList.add('bg-[#D49286]');
//         svgdiv.classList.remove('text-yellow-400');
//         svgdiv.classList.add('text-[#D49286]');
//         logoSrc.src = "images/logoIns-re.png";

//     }
// }

// ================================================
// ================================================
// ================================================

// function timer() {
//             let timeLeft = 20;
//             const countdown = document.getElementById("countdown");
//         const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
//         const seconds = String(timeLeft % 60).padStart(2, '0');
//         countdown.value = `${minutes}:${seconds}`;

//         timeLeft--;

//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             countdown.value = "00:00";
//         }
//     }
// const timer = setInterval(timer, 1000);
// =============================================
// =============================================
// =============================================

// const users = [
//     {
//         email : "admin@gmail.com",
//         password : "admin123",
//         status : "admin",

//     },
// ]
const quizQuestions = [
  // Niveau A1
  {
    level: "A1",
    categories: {
      grammaire: [
        { 
          question: "Complétez la phrase : 'Je _____ un livre.'",
          options: ["lis", "lire", "lira", "lu"],
          answer: "lis"
        },
        { 
          question: "Complétez la phrase : 'Il _____ beaucoup de devoirs.'",
          options: ["a", "est", "ont", "sont"],
          answer: "a"
        },
        { 
          question: "Complétez la phrase : 'Nous _____ à l'école.'",
          options: ["allons", "allée", "aller", "irons"],
          answer: "allons"
        },
        { 
          question: "Complétez la phrase : 'Tu _____ un animal.'",
          options: ["as", "a", "es", "ont"],
          answer: "as"
        },
        { 
          question: "Complétez la phrase : 'Elle _____ un livre.'",
          options: ["lit", "lire", "lit", "lis"],
          answer: "lit"
        },
        { 
          question: "Complétez la phrase : 'Nous _____ du pain.'",
          options: ["mangeons", "mange", "manger", "mangent"],
          answer: "mangeons"
        },
        { 
          question: "Complétez la phrase : 'Je _____ au parc.'",
          options: ["vais", "va", "aller", "allé"],
          answer: "vais"
        },
        { 
          question: "Complétez la phrase : 'Ils _____ dans une grande maison.'",
          options: ["vivent", "vivent", "vivre", "vivraient"],
          answer: "vivent"
        },
        { 
          question: "Complétez la phrase : 'Elle _____ dans le jardin.'",
          options: ["court", "court", "courir", "cours"],
          answer: "court"
        },
        { 
          question: "Complétez la phrase : 'Nous ______ des jeux.'",
          options: ["jouons", "joue", "jouer", "jouerons"],
          answer: "jouons"
        }
      ],
      vocabulaire: [
        { 
          question: "Quel est le contraire de 'grand' ?",
          options: ["petit", "large", "beau", "haut"],
          answer: "petit"
        },
        { 
          question: "Que signifie 'chien' ?",
          options: ["Un animal", "Un fruit", "Une couleur", "Un vêtement"],
          answer: "Un animal"
        },
        { 
          question: "Quel est l'intrus dans cette liste ?",
          options: ["voiture", "bicyclette", "moto", "pomme"],
          answer: "pomme"
        },
        { 
          question: "Que signifie 'soleil' ?",
          options: ["Un fruit", "Un animal", "Un astre", "Un objet"],
          answer: "Un astre"
        },
        { 
          question: "Quel est le contraire de 'sombre' ?",
          options: ["Clair", "Vif", "Solide", "Lumineux"],
          answer: "Lumineux"
        },
        { 
          question: "Que signifie 'chaud' ?",
          options: ["Froid", "Épais", "Température élevée", "Lourd"],
          answer: "Température élevée"
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["table", "chaise", "livre", "pomme"],
          answer: "pomme"
        },
        { 
          question: "Quel est le contraire de 'bas' ?",
          options: ["haut", "grand", "lourd", "court"],
          answer: "haut"
        },
        { 
          question: "Complétez : Un _____ a des poils.",
          options: ["chien", "arbre", "soleil", "fleur"],
          answer: "chien"
        },
        { 
          question: "Quel est l'élément essentiel pour la photosynthèse ?",
          options: ["Soleil", "Lune", "Air", "Feu"],
          answer: "Soleil"
        }
      ],
      comprehension: [
        { 
          question: "Qu'est-ce que l'on fait après le déjeuner ?",
          options: ["Manger", "Dormir", "Se lever", "Travailler"],
          answer: "Se lever"
        },
        { 
          question: "Que fait-on dans une école ?",
          options: ["Chanter", "Apprendre", "Cuisiner", "Nager"],
          answer: "Apprendre"
        },
        { 
          question: "Si tu veux boire de l'eau, que fais-tu ?",
          options: ["Manger", "Marcher", "Boire", "Écrire"],
          answer: "Boire"
        },
        { 
          question: "Que met-on sur la tête quand il pleut ?",
          options: ["Chapeau", "Parapluie", "Lunettes", "Sac"],
          answer: "Parapluie"
        },
        { 
          question: "Que faut-il faire pour cuisiner ?",
          options: ["Lire", "Mélanger", "Chanter", "Marcher"],
          answer: "Mélanger"
        },
        { 
          question: "Que fait-on quand on est fatigué ?",
          options: ["Dormir", "S'amuser", "Cuisiner", "Marcher"],
          answer: "Dormir"
        },
        { 
          question: "Si tu veux lire un livre, tu _____",
          options: ["Chantes", "Vas à l'école", "Lis", "Écris"],
          answer: "Lis"
        },
        { 
          question: "Que fais-tu quand il pleut ?",
          options: ["Nager", "Courir", "Prendre un parapluie", "Manger"],
          answer: "Prendre un parapluie"
        },
        { 
          question: "Quand il fait chaud, on porte des _____",
          options: ["Manteaux", "Tongs", "Gants", "Bottes"],
          answer: "Tongs"
        },
        { 
          question: "Que fais-tu avec un livre ?",
          options: ["Lire", "Dormir", "Manger", "Faire du sport"],
          answer: "Lire"
        }
      ]
    }
  },
  // Niveau A2
  {
    level: "A2",
    categories: {
      grammaire: [
        { 
          question: "Complétez la phrase : 'Ils _____ des vacances.'",
          options: ["prennent", "prendre", "pris", "prend"],
          answer: "prennent"
        },
        { 
          question: "Complétez la phrase : 'Nous _____ la musique classique.'",
          options: ["aimons", "aimer", "aime", "aimé"],
          answer: "aimons"
        },
        { 
          question: "Complétez : 'Elles _____ du shopping chaque samedi.'",
          options: ["font", "fait", "faire", "fera"],
          answer: "font"
        },
        { 
          question: "Complétez la phrase : 'Je _____ en France l'année dernière.'",
          options: ["suis allé", "allais", "ira", "vas"],
          answer: "suis allé"
        },
        { 
          question: "Complétez la phrase : 'Il _____ beau aujourd'hui.'",
          options: ["fait", "fais", "faisons", "faisait"],
          answer: "fait"
        }
      ],
      vocabulaire: [
        { 
          question: "Que signifie 'hiver' ?",
          options: ["Une saison", "Un mois", "Une couleur", "Un légume"],
          answer: "Une saison"
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["lundi", "mai", "mars", "dimanche"],
          answer: "mai"
        },
        { 
          question: "Quel est le contraire de 'riche' ?",
          options: ["pauvre", "heureux", "jeune", "petit"],
          answer: "pauvre"
        },
        { 
          question: "Quel est l'intrus dans cette liste ?",
          options: ["chien", "chat", "fleur", "oiseau"],
          answer: "fleur"
        },
        { 
          question: "Que signifie 'nager' ?",
          options: ["Voler", "Marcher", "Sauter", "Se déplacer dans l'eau"],
          answer: "Se déplacer dans l'eau"
        }
      ],
      comprehension: [
        { 
          question: "Que fait-on dans un restaurant ?",
          options: ["Dormir", "Manger", "Nager", "Courir"],
          answer: "Manger"
        },
        { 
          question: "Que fait-on avec un téléphone ?",
          options: ["Écouter de la musique", "Dormir", "Lire un livre", "Jouer au football"],
          answer: "Écouter de la musique"
        },
        { 
          question: "Qu'est-ce qu'on achète dans une boulangerie ?",
          options: ["Pain", "Vêtements", "Journaux", "Jouets"],
          answer: "Pain"
        },
        { 
          question: "Que porte-t-on pour protéger ses pieds ?",
          options: ["Chaussures", "Chapeau", "Lunettes", "Écharpe"],
          answer: "Chaussures"
        },
        { 
          question: "Que fait-on en été ?",
          options: ["Aller à la plage", "Porter un manteau", "Allumer le chauffage", "Manger une soupe chaude"],
          answer: "Aller à la plage"
        }
      ]
    }
  },

  // Niveau B1
  {
    level: "B1",
    categories: {
      grammaire: [
        { 
          question: "Complétez : 'Si j'avais le temps, je _____ en vacances.'",
          options: ["partirais", "partirai", "partais", "partir"],
          answer: "partirais"
        },
        { 
          question: "Complétez : 'Ils _____ arriver à l'heure.'",
          options: ["doivent", "devraient", "devra", "pourraient"],
          answer: "devraient"
        },
        { 
          question: "Complétez : 'Il est important que tu _____.'",
          options: ["viennes", "viens", "venir", "vienne"],
          answer: "viennes"
        },
        { 
          question: "Complétez : 'Nous _____ d'acheter une nouvelle voiture.'",
          options: ["avons décidé", "avons decide", "décide", "décidions"],
          answer: "avons décidé"
        },
        { 
          question: "Complétez : 'Elle _____ qu'il viendrait.'",
          options: ["croyait", "croit", "crois", "croira"],
          answer: "croyait"
        }
      ],
      vocabulaire: [
        { 
          question: "Que signifie 'épuisé' ?",
          options: ["Très fatigué", "Très content", "Très énervé", "Très surpris"],
          answer: "Très fatigué"
        },
        { 
          question: "Quel est le synonyme de 'rapide' ?",
          options: ["Lent", "Vif", "Doux", "Mou"],
          answer: "Vif"
        },
        { 
          question: "Quel est le contraire de 'début' ?",
          options: ["Fin", "Milieu", "Commencement", "Ouverture"],
          answer: "Fin"
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["poisson", "cheval", "chien", "maison"],
          answer: "maison"
        },
        { 
          question: "Quel est le synonyme de 'habiter' ?",
          options: ["Vivre", "Construire", "Parler", "Dessiner"],
          answer: "Vivre"
        }
      ],
      comprehension: [
        { 
          question: "Que fait-on dans une bibliothèque ?",
          options: ["Lire", "Nager", "Courir", "Manger"],
          answer: "Lire"
        },
        { 
          question: "Qu'est-ce que la météo annonce ?",
          options: ["Le temps qu'il fera", "Les émissions TV", "Les résultats sportifs", "Les films à l'affiche"],
          answer: "Le temps qu'il fera"
        },
        { 
          question: "Où peut-on trouver des œuvres d'art ?",
          options: ["Au musée", "À la banque", "À la boulangerie", "Au gymnase"],
          answer: "Au musée"
        },
        { 
          question: "Que fait-on dans un hôpital ?",
          options: ["Se faire soigner", "Faire ses courses", "Apprendre", "Jouer"],
          answer: "Se faire soigner"
        },
        { 
          question: "Qu'est-ce que l'on met dans une valise ?",
          options: ["Des vêtements", "De l'eau", "Des meubles", "De la nourriture"],
          answer: "Des vêtements"
        }
      ]
    }
  },

  // Niveau B2
  {
    level: "B2",
    categories: {
      grammaire: [
        { 
          question: "Complétez : 'Je doute qu'il _____ venir.'",
          options: ["puisse", "peut", "pouvez", "pouvait"],
          answer: "puisse"
        },
        { 
          question: "Complétez : 'Nous _____ que c'était une bonne idée.'",
          options: ["avons pensé", "pensons", "pense", "pensaient"],
          answer: "avons pensé"
        },
        { 
          question: "Complétez : 'Ils _____ réussir sans aide.'",
          options: ["pourraient", "peuvent", "pourront", "pouvez"],
          answer: "pourraient"
        },
        { 
          question: "Complétez : 'Si tu _____ plus tôt, tu serais arrivé à temps.'",
          options: ["étais parti", "partirais", "partiras", "pars"],
          answer: "étais parti"
        },
        { 
          question: "Complétez : 'Elle _____ être la meilleure de sa classe.'",
          options: ["pourrait", "peut", "pouvait", "pourrez"],
          answer: "pourrait"
        }
      ],
      vocabulaire: [
        { 
          question: "Que signifie 'intempérie' ?",
          options: ["Mauvais temps", "Bon temps", "Température", "Humidité"],
          answer: "Mauvais temps"
        },
        { 
          question: "Quel est le synonyme de 'compétence' ?",
          options: ["Habileté", "Amitié", "Richesse", "Paix"],
          answer: "Habileté"
        },
        { 
          question: "Quel est le contraire de 'complet' ?",
          options: ["Incomplet", "Parfait", "Entier", "Total"],
          answer: "Incomplet"
        },
        { 
          question: "Quel est le synonyme de 'difficile' ?",
          options: ["Compliqué", "Facile", "Simple", "Pratique"],
          answer: "Compliqué"
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["orange", "pomme", "école", "banane"],
          answer: "école"
        }
      ],
      comprehension: [
        { 
          question: "Quel est le rôle d'un avocat ?",
          options: ["Défendre les clients", "Cuisiner", "Enseigner", "Soigner les patients"],
          answer: "Défendre les clients"
        },
        { 
          question: "Que fait-on dans un avion ?",
          options: ["Voyager", "Nager", "Manger", "Dormir"],
          answer: "Voyager"
        },
        { 
          question: "Où peut-on consulter un médecin ?",
          options: ["À l'hôpital", "À l'école", "Au cinéma", "Au restaurant"],
          answer: "À l'hôpital"
        },
        { 
          question: "Que signifie 'écologique' ?",
          options: ["Respectueux de l'environnement", "Cher", "Nouveau", "Facile"],
          answer: "Respectueux de l'environnement"
        },
        { 
          question: "Qu'est-ce qu'on fait pour économiser de l'énergie ?",
          options: ["Éteindre les lumières", "Allumer toutes les lumières", "Prendre la voiture", "Laisser les appareils en marche"],
          answer: "Éteindre les lumières"
        }
      ]
    }
  },

  // Niveau C1
  {
    level: "C1",
    categories: {
      grammaire: [
        { 
          question: "Complétez : 'Il est possible qu'il _____ déjà parti.'",
          options: ["soit", "sera", "est", "était"],
          answer: "soit"
        },
        { 
          question: "Complétez : 'Bien qu'elle _____, elle a refusé de céder.'",
          options: ["ait compris", "comprenait", "comprendre", "compris"],
          answer: "ait compris"
        },
        { 
          question: "Complétez : 'Si seulement nous _____ plus tôt de ce problème.'",
          options: ["avions su", "savons", "sachions", "savions"],
          answer: "avions su"
        },
        { 
          question: "Complétez : 'Je doute que cette solution _____ efficace à long terme.'",
          options: ["soit", "est", "serait", "était"],
          answer: "soit"
        },
        { 
          question: "Complétez : 'Quoiqu'il _____ tard, il a continué à travailler.'",
          options: ["fût", "est", "sera", "était"],
          answer: "fût"
        }
      ],
      vocabulaire: [
        { 
          question: "Que signifie 'pragmatique' ?",
          options: ["Réfléchi et réaliste", "Optimiste", "Compliqué", "Ignorant"],
          answer: "Réfléchi et réaliste"
        },
        { 
          question: "Quel est le synonyme de 'pertinent' ?",
          options: ["Adéquat", "Lent", "Rapide", "Irrationnel"],
          answer: "Adéquat"
        },
        { 
          question: "Quel est le contraire de 'rationnel' ?",
          options: ["Irrationnel", "Pratique", "Évident", "Efficace"],
          answer: "Irrationnel"
        },
        { 
          question: "Quel est le synonyme de 'avide' ?",
          options: ["Cupide", "Content", "Léger", "Patient"],
          answer: "Cupide"
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["loquace", "bavard", "muet", "parleur"],
          answer: "muet"
        }
      ],
      comprehension: [
        { 
          question: "Quel est l'objectif principal d'une thèse universitaire ?",
          options: ["Présenter des recherches approfondies", "Faire de la publicité", "Raconter une histoire", "Divertir le lecteur"],
          answer: "Présenter des recherches approfondies"
        },
        { 
          question: "Quel est l'impact des énergies renouvelables sur l'environnement ?",
          options: ["Réduire les émissions de gaz à effet de serre", "Augmenter la pollution", "Ralentir l'économie", "Aggraver le changement climatique"],
          answer: "Réduire les émissions de gaz à effet de serre"
        },
        { 
          question: "Pourquoi le recyclage est-il important ?",
          options: ["Il aide à conserver les ressources naturelles", "Il coûte très cher", "Il est dangereux", "Il prend beaucoup de place"],
          answer: "Il aide à conserver les ressources naturelles"
        },
        { 
          question: "Que signifie 'altruisme' ?",
          options: ["S'intéresser au bien-être des autres", "Penser d'abord à soi-même", "Accumuler des richesses", "Éviter les contacts sociaux"],
          answer: "S'intéresser au bien-être des autres"
        },
        { 
          question: "Pourquoi les opinions sont-elles importantes dans un débat ?",
          options: ["Elles enrichissent les perspectives", "Elles empêchent de conclure", "Elles déroutent les participants", "Elles bloquent le dialogue"],
          answer: "Elles enrichissent les perspectives"
        }
      ]
    }
  },

  // Niveau C2
  {
    level: "C2",
    categories: {
      grammaire: [
        { 
          question: "Complétez : 'Il affirme que, tout bien considéré, il _____ accepter les conditions proposées.'",
          options: ["pourrait", "peut", "pouvait", "avait pu"],
          answer: "pourrait"
        },
        { 
          question: "Complétez : 'Il eut fallu que nous _____ avant de procéder.'",
          options: ["en discutions", "en discutons", "en avons discuté", "discutions"],
          answer: "en discutions"
        },
        { 
          question: "Complétez : 'À supposer qu’il _____ là, que feriez-vous ?'",
          options: ["fût", "sera", "est", "soit"],
          answer: "fût"
        },
        { 
          question: "Complétez : 'Eût-il eu connaissance de ces faits, il n’_____ pas accepté.'",
          options: ["aurait", "aura", "avait", "a"],
          answer: "aurait"
        },
        { 
          question: "Complétez : 'Elle aurait préféré qu'il _____ plus tôt.'",
          options: ["partît", "partait", "partirait", "est parti"],
          answer: "partît"
        }
      ],
      vocabulaire: [
        { 
          question: "Que signifie 'contingent' dans le contexte d’une analyse ?",
          options: ["Dépendant des circonstances", "Évident", "Indépendant", "Immuable"],
          answer: "Dépendant des circonstances"
        },
        { 
          question: "Quel est le synonyme de 'omniscient' ?",
          options: ["Tout-puissant", "Ignorant", "Perspicace", "Savant"],
          answer: "Savant"
        },
        { 
          question: "Que signifie 'périssable' ?",
          options: ["Qui se détériore", "Qui est éternel", "Qui est flexible", "Qui est artificiel"],
          answer: "Qui se détériore"
        },
        { 
          question: "Quel est le synonyme de 'disparate' ?",
          options: ["Hétérogène", "Similaire", "Stable", "Constamment"],
          answer: "Hétérogène"
        },
        { 
          question: "Que signifie 'incisif' ?",
          options: ["Pénétrant", "Léger", "Confus", "Silencieux"],
          answer: "Pénétrant"
        }
      ],
      comprehension: [
        { 
          question: "Pourquoi la méthodologie est-elle cruciale dans une étude scientifique ?",
          options: ["Elle garantit la validité des résultats", "Elle accélère le travail", "Elle réduit les coûts", "Elle simplifie la compréhension"],
          answer: "Elle garantit la validité des résultats"
        },
        { 
          question: "Quel rôle jouent les biais dans une analyse critique ?",
          options: ["Ils influencent les conclusions", "Ils renforcent la neutralité", "Ils n'ont aucun impact", "Ils sont souhaitables"],
          answer: "Ils influencent les conclusions"
        },
        { 
          question: "Pourquoi l'éthique est-elle centrale dans la recherche médicale ?",
          options: ["Pour protéger les sujets de recherche", "Pour maximiser les profits", "Pour simplifier les expériences", "Pour réduire les coûts"],
          answer: "Pour protéger les sujets de recherche"
        },
        { 
          question: "Que signifie 'exhaustivité' dans un contexte de recherche ?",
          options: ["Couvrir tous les aspects pertinents", "Être rapide", "Être peu détaillé", "Ignorer les données secondaires"],
          answer: "Couvrir tous les aspects pertinents"
        },
        { 
          question: "Comment interpréter une étude longitudinale ?",
          options: ["En analysant des données sur une longue période", "En étudiant un instant précis", "En se basant sur des hypothèses", "En excluant certaines variables"],
          answer: "En analysant des données sur une longue période"
        }
      ]
    }
  }

];

function addUser(name, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = {
    name: name,
    password: password,
    status: "user",
    levels: {
      A1: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      A2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      B1: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      B2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      C1: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      C2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
    },
  };
  users.push(user);
  localStorage.setItem("users", users);
}

let questionsObjet = [
  {
    question:
      "Quel mot complète la phrase suivante : 'Il est important de ____ pour rester en bonne santé.'",
    title: "Grammaire et Lexique",
    options: ["manger", "jouer", "dormir", "courir"],
    answer: "dormir",
  },
  {
    question: "Choisissez le synonyme de 'joyeux'.",
    title: "Lexique",
    options: ["triste", "content", "furieux", "jaloux"],
    answer: "content",
  },
  {
    question:
      "Complétez avec la bonne préposition : 'Je vais ____ école en voiture.'",
    title: "Grammaire",
    options: ["au", "à l'", "à la", "dans l'"],
    answer: "à l'",
  },
  {
    question: "Quel mot est l’intrus ?",
    title: "Vocabulaire",
    options: ["pomme", "orange", "raisin", "chaise"],
    answer: "chaise",
  },
  {
    question:
      "Comment conjuguer correctement le verbe dans la phrase : 'Nous ____ au cinéma hier soir.'",
    title: "Conjugaison",
    options: ["allons", "irions", "sommes allés", "irons"],
    answer: "sommes allés",
  },
  {
    question: "Quelle est la bonne orthographe ?",
    title: "Orthographe",
    options: ["apparament", "apparemment", "aparrement", "apperemment"],
    answer: "apparemment",
  },
  {
    question:
      "Quel pronom convient dans cette phrase : '____ avons fini notre travail.'",
    title: "Grammaire",
    options: ["Vous", "Ils", "Nous", "Elles"],
    answer: "Nous",
  },
  {
    question:
      "Complétez avec le mot qui convient : 'Elle a acheté un cadeau ____ son frère.'",
    title: "Grammaire",
    options: ["pour", "à", "avec", "chez"],
    answer: "pour",
  },
  {
    question: "Quel est l’antonyme de 'clair' ?",
    title: "Lexique",
    options: ["léger", "sombre", "lumineux", "chaud"],
    answer: "sombre",
  },
  {
    question:
      "Complétez avec le verbe correct : 'Les enfants ____ dans le parc tous les jours.'",
    title: "Conjugaison",
    options: ["joue", "jouons", "jouent", "jouer"],
    answer: "jouent",
  },
];


function satrtQuizzLevel(level,categorie){
  userscore = 0
  const userSection = document.getElementById("userSection");
  userSection.classList.add("hidden");

  let shuffledQuestions;

  const selectedLevel = quizQuestions.find(quiz => quiz.level === level);
  const selectedCategorie = selectedLevel.categories[categorie]

  console.log(selectedCategorie);
  
  const quizContainer = document.getElementById("quiz");
  quizContainer.classList.remove("hidden");
  quizContainer.innerHTML = "";

  localStorage.setItem(`score`,userscore); 
  questionsObjet = selectedCategorie;
  shuffledQuestions = shuffle(questionsObjet) ;
  shuffledQuestions.forEach((q, index) => {

      const questionOptions = document.createElement("div");
      questionOptions.classList.add("Questions" , "flex", "absolute", "top-1/3", "w-full");

      const questionElement = document.createElement("div");
      questionElement.classList.add("px-16", "w-full");

      const titleContainer =  document.createElement("div");
      titleContainer.classList.add("h-32");
      titleContainer.innerHTML = `<h1 class="text-[#D49286] text-5xl font-bold"></h1>`
      questionElement.appendChild(titleContainer);

      const questionContainer = document.createElement("div");
      
      questionContainer.innerHTML = `
      <div class="flex justify-between items-center h-16 ">
          <h2 class="text-[#D49286] text-xl" >Question ${index+1} of ${selectedCategorie.length}</h2>
          <input type="time" class="bg-transparent countdown">
      </div>
      <p class="text-2xl font-bold">
          Choisissez la bonne réponse : <br> 
          "${q.question}"
      </p>
      `;
      questionElement.appendChild(questionContainer);

      const optionsElement = document.createElement("div");
      optionsElement.classList.add("text-center", "w-full", "mt-3" ,"relative");
      optionsElement.innerHTML = `
          <button id='option0${index}' onclick="chooseOption('option0${index}','${index}','${q.options[0]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>A.<span class='OptionValue'>${q.options[0]}</span></nav></button>
          <button id='option1${index}' onclick="chooseOption('option1${index}','${index}','${q.options[1]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>B.<span class='OptionValue'>${q.options[1]}</span></nav></button>
          <button id='option2${index}' onclick="chooseOption('option2${index}','${index}','${q.options[2]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>C.<span class='OptionValue'>${q.options[2]}</span></nav></button>
          <button id='option3${index}' onclick="chooseOption('option3${index}','${index}','${q.options[3]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>D.<span class='OptionValue'>${q.options[3]}</span></nav></button>
          <button id="submitAnswer${index}" onclick="ButtonNextQuestion('${index}')" class="Submit border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20" >Submit Answer</button>
          <button id="nextQuestion${index}" onclick="displayQuestion()" class="border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20 hidden" >Next Question</button>
      `;

      questionOptions.appendChild(questionElement);
      questionOptions.appendChild(optionsElement);
      quizContainer.appendChild(questionOptions);
      
  });
  displayQuestion()

}

function shuffle(arr) {
  const num = 5;
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < num; j++) {
      const rand = Math.floor(Math.random() * arr.length);
      var temp = arr[i];
      arr[i] = arr[rand];
      arr[rand] = temp;
    }
  }
  return arr;
}

let userscore = 0;

function startQuiz() {
  for (let i = 0; i < questionsObjet.length; i++) {
    localStorage.removeItem(`question${i}`);
  }
  userscore = 0;
  const userSection = document.getElementById("userSection");
  userSection.classList.add("hidden");
  const scoreSection = document.getElementById("scoreSection");
  scoreSection.classList.add("hidden");

  const shuffledQuestions = shuffle(questionsObjet);
  const quizContainer = document.getElementById("quiz");

  localStorage.setItem(`score`, userscore);

  quizContainer.innerHTML = "";

  shuffledQuestions.forEach((q, index) => {
    const questionOptions = document.createElement("div");
    questionOptions.classList.add(
      "Questions",
      "flex",
      "absolute",
      "top-1/3",
      "w-full"
    );

    const questionElement = document.createElement("div");
    questionElement.classList.add("px-16", "w-full");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("h-32");
    titleContainer.innerHTML = `<h1 class="text-[#D49286] text-5xl font-bold">${q.title}</h1>`;
    questionElement.appendChild(titleContainer);

    const questionContainer = document.createElement("div");

    questionContainer.innerHTML = `
        <div class="flex justify-between items-center h-16 ">
            <h2 class="text-[#D49286] text-xl" >Question ${index + 1} of ${
      questionsObjet.length
    }</h2>
            <input type="time" class="bg-transparent countdown">
        </div>
        <p class="text-2xl font-bold">
            Choisissez la bonne réponse : <br> 
            "${q.question}"
        </p>
        `;
    questionElement.appendChild(questionContainer);

    const optionsElement = document.createElement("div");
    optionsElement.classList.add("text-center", "w-full", "mt-3", "relative");
    optionsElement.innerHTML = `
            <button id='option0${index}' onclick="chooseOption('option0${index}','${index}','${q.options[0]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>A.<span class='OptionValue'>${q.options[0]}</span></nav></button>
            <button id='option1${index}' onclick="chooseOption('option1${index}','${index}','${q.options[1]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>B.<span class='OptionValue'>${q.options[1]}</span></nav></button>
            <button id='option2${index}' onclick="chooseOption('option2${index}','${index}','${q.options[2]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>C.<span class='OptionValue'>${q.options[2]}</span></nav></button>
            <button id='option3${index}' onclick="chooseOption('option3${index}','${index}','${q.options[3]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>D.<span class='OptionValue'>${q.options[3]}</span></nav></button>
            <button id="submitAnswer${index}" onclick="ButtonNextQuestion('${index}')" class="Submit border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20" >Submit Answer</button>
            <button id="nextQuestion${index}" onclick="displayQuestion()" class="border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20 hidden" >Next Question</button>
        `;

    questionOptions.appendChild(questionElement);
    questionOptions.appendChild(optionsElement);
    quizContainer.appendChild(questionOptions);
  });
  displayQuestion();
}

function ButtonNextQuestion(i, isTimer = false) {
  const buttons = document.getElementsByClassName("answer-button");
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].disabled = true;
    buttons[j].classList.add("cursor-not-allowed");
  }
  const qChoose = localStorage.getItem(`question${i}`);
  console.log(qChoose); //text

  const qOption = localStorage.getItem(`option${i}_Id`);
  console.log(qOption); //id

  const submitAnswer = document.getElementById(`submitAnswer${i}`);
  const nextQuestion = document.getElementById(`nextQuestion${i}`);

  submitAnswer.classList.add("hidden");
  nextQuestion.classList.remove("hidden");

  const qAnswer = questionsObjet[i].answer;
  const questionContent = questionsObjet[i].question;

  console.log(qAnswer); // text of correct answer

  localStorage.setItem(`Corret_Answer${i}`, qAnswer);
  localStorage.setItem(`Question_Content${i}`, questionContent);

  const id = document.getElementById(qOption);

  if (qChoose === qAnswer) {
    if (!id.innerHTML.includes("✅")) {
      id.innerHTML += `<span>✅</span>`;
    }
    // id.innerHTML += `<span>✅</span>`;
    id.classList.remove("border-blue-500");
    id.classList.add("border-green-500");
    userscore += 1;
    localStorage.setItem(`score`, userscore);
  } else {
    const allOptionValue = document.getElementsByClassName("OptionValue");

    for (let k = 0; k < allOptionValue.length; k++) {
      if (allOptionValue[k].textContent === qAnswer) {
        const option = allOptionValue[k].parentElement;
        const correctOption = option.parentElement;
        correctOption.classList.remove("border-[#D49286]");
        correctOption.classList.add("border-green-500");
        // correctOption.innerHTML += `<span>✅</span>`;
        if (!correctOption.innerHTML.includes("✅")) {
          correctOption.innerHTML += `<span>✅</span>`;
        }
      }
    }

    if (isTimer) {
      id.classList.remove("border-red-500");
      id.classList.add("border-[#D49286]-500");
    } else {
      id.innerHTML += `<span>❌</span>`;
      id.classList.remove("border-blue-500");
      id.classList.add("border-red-500");
    }
  }
}

let c = 0;
function displayQuestion() {
  const submitAnswer = document.getElementsByClassName("Submit");
  for (let j = 0; j < submitAnswer.length; j++) {
    submitAnswer[j].disabled = true;
    submitAnswer[j].classList.add("cursor-not-allowed");
  }
  const buttons = document.getElementsByClassName("answer-button");
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].disabled = false;
    buttons[j].classList.remove("cursor-not-allowed");
  }

  const question = document.getElementsByClassName("Questions");

  if (c < questionsObjet.length) {
    Array.from(question).forEach((question) => {
      question.classList.add("hidden");
    });
    question[c].classList.remove("hidden");
    // startTimer(c);
    c++;
  } else {
    c = 0;
    Array.from(question).forEach((question) => {
      question.classList.add("hidden");
    });

    const scoreSection = document.getElementById("scoreSection");
    scoreSection.classList.remove("hidden");
    const scoreTitle = document.getElementById("scoreResult");

    const score = localStorage.getItem("score");
    scoreTitle.innerHTML = `${score}`;
    seeResult();
  }
}

function chooseOption(optionId, index, optionValue) {
  localStorage.setItem(`question${index}`, optionValue);
  localStorage.setItem(`option${index}_Id`, optionId);

  const submitAnswer = document.getElementsByClassName("Submit");
  for (let j = 0; j < submitAnswer.length; j++) {
    submitAnswer[j].disabled = false;
    submitAnswer[j].classList.remove("cursor-not-allowed");
  }
  const allButtonOptions = document.getElementsByClassName("answer-button");
  for (let i = 0; i < allButtonOptions.length; i++) {
    allButtonOptions[i].classList.remove("border-blue-500");
    allButtonOptions[i].classList.add("border-[#D49286]");
  }

  const chooseStyle = document.getElementById(optionId);
  chooseStyle.classList.remove("border-[#D49286]");
  chooseStyle.classList.add("border-blue-500");
}

function seeResult() {
  const userSection = document.getElementById("userSection");
  userSection.classList.add("hidden");

  const scoreSection = document.getElementById("scoreSection");
  scoreSection.classList.remove("hidden");

  const scoreTitle = document.getElementById("scoreResult");

  const score = localStorage.getItem("score");
  scoreTitle.innerHTML = `${score}`;

  const level = document.getElementById("level");
  if (score <= 2) {
    level.innerHTML = "A1";
  } else if (score > 2 && score <= 5) {
    level.innerHTML = "A2";
  } else if (score >= 6 && score < 8) {
    level.innerHTML = "B1";
  } else if (score === 8) {
    level.innerHTML = "B2";
  } else if (score === 9) {
    level.innerHTML = "C1";
  } else {
    level.innerHTML = "C2";
  }
}

function userName() {
  const adminUsername = "admin@gmail.com";
  const adminPassword = "admin123";
  const userName = document.getElementById("userName");
  const password = document.getElementById("password").value;
  if (userName.value !== "") {
    const homeSection = document.getElementById("homeSection");
    homeSection.classList.add("hidden");
    const userSection = document.getElementById("userSection");
    userSection.classList.remove("hidden");
    const oldData = localStorage.getItem("userName");
    const oldscore = document.getElementById("oldscore");

    if (userName.value === adminUsername && password === adminPassword) {
      window.location.href = "admin.html";
    } else if (oldData === userName.value) {
      oldscore.classList.remove("hidden");
      const spanName = document.getElementById("theUserName");
      spanName.innerHTML = userName.value;
    } else {
      oldscore.classList.add("hidden");
    }

    localStorage.setItem("userName", userName.value);
  } else {
    alert("Enter your Name");
  }
}

function ResultRapport() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  let pdfContent = "";

  for (let i = 0; i < questionsObjet.length; i++) {
    const userAnswer = localStorage.getItem(`question${i}`);
    const content = localStorage.getItem(`Question_Content${i}`);
    const correctAnswer = localStorage.getItem(`Corret_Answer${i}`);
    pdfContent += `${
      i + 1
    }. ${content}\nVotre réponse : ${userAnswer}\nRéponse correcte : ${correctAnswer}\n\n`;
  }

  pdf.text(pdfContent, 10, 10);
  pdf.save("Rapport_Quiz.pdf");
}

function ResultRapport() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  let pdfContent = "";

  for (let i = 0; i < questionsObjet.length; i++) {
    const userAnswer = localStorage.getItem(`question${i}`);
    const content = localStorage.getItem(`Question_Content${i}`);
    const correctAnswer = localStorage.getItem(`Corret_Answer${i}`);
    pdfContent += `${
      i + 1
    }. ${content}\nVotre réponse : ${userAnswer}\nRéponse correcte : ${correctAnswer}\n\n`;
  }

  pdf.text(pdfContent, 10, 10);
  pdf.save("Rapport_Quiz.pdf");
}

// let timerInterval;
// function startTimer(i) {
//     let timeLeft = 5;
//     const countdown = document.getElementsByClassName("countdown");

//     function updateTimer() {
//         const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
//         const seconds = String(timeLeft % 60).padStart(2, '0');
//         for(let i = 0 ; i < countdown.length ; i++){
//             countdown[i].value = `${minutes}:${seconds}`;
//         }

//         timeLeft--;

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             for(let i = 0 ; i < countdown.length ; i++){
//                 countdown[i].value = "00:00";
//             }
//             ButtonNextQuestion(i,true);
//         }
//     }
//     clearInterval(timerInterval);
//     updateTimer();
//     const timerInterval = setInterval(updateTimer, 1000);
// }

//------timer

let timerInterval;

function startTimer(i) {
  let timeLeft = 20; // Set the time for each question
  const countdown = document.getElementsByClassName("countdown");

  function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    for (let i = 0; i < countdown.length; i++) {
      countdown[i].value = `${minutes}:${seconds}`;
    }

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      for (let i = 0; i < countdown.length; i++) {
        countdown[i].value = "00:00";
      }
      ButtonNextQuestion(i, true); // Call the function to handle time up
    }
  }

  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function displayQuestion() {
  const submitAnswer = document.getElementsByClassName("Submit");
  for (let j = 0; j < submitAnswer.length; j++) {
    submitAnswer[j].disabled = true;
    submitAnswer[j].classList.add("cursor-not-allowed");
  }
  const buttons = document.getElementsByClassName("answer-button");
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].disabled = false;
    buttons[j].classList.remove("cursor-not-allowed");
  }

  const question = document.getElementsByClassName("Questions");

  if (c < questionsObjet.length) {
    Array.from(question).forEach((question) => {
      question.classList.add("hidden");
    });
    question[c].classList.remove("hidden");
    startTimer(c); // Start the timer for the current question
    c++;
  } else {
    c = 0;
    Array.from(question).forEach((question) => {
      question.classList.add("hidden");
    });

    const scoreSection = document.getElementById("scoreSection");
    scoreSection.classList.remove("hidden");
    const scoreTitle = document.getElementById("scoreResult");

    const score = localStorage.getItem("score");
    scoreTitle.innerHTML = `${score}`;
    seeResult();
  }
}

// darck mode

// document.getElementById("switch").addEventListener("change", function() {
//     const body = document.getElementById("body");
//     if (this.checked) {
//         body.classList.remove("light-mode");
//         body.classList.add("dark-mode");
//     } else {
//         body.classList.remove("dark-mode");
//         body.classList.add("light-mode");
//     }
// });

// filtrage par level et categorie: fouad

document
  .getElementById("level-filter")
  .addEventListener("change", filterContent);
document
  .getElementById("category-filter")
  .addEventListener("change", filterContent);

function filterContent() {
  const selectedLevel = document.getElementById("level-filter").value;
  const selectedCategory = document.getElementById("category-filter").value;
  const levels = document.querySelectorAll(" .level");

  levels.forEach((level) => {
    const levelMatch =
      selectedLevel === "all" ||
      level.getAttribute("data-level") === selectedLevel;

    if (
      levelMatch &&
      (selectedCategory === "all" ||
        level.querySelector(`button[data-category="${selectedCategory}"]`))
    ) {
      level.style.display = "block";

      level.querySelectorAll("button").forEach((button) => {
        if (
          selectedCategory === "all" ||
          button.getAttribute("data-category") === selectedCategory
        ) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      });
    } else {
      level.style.display = "none";
    }
  });
}




// script.js

function logout() {
    // Clear user session data (if applicable)
    // For example, if you are using localStorage to store user info:
    localStorage.removeItem('user'); // Adjust the key as necessary

    // Optionally, you can also clear cookies or session storage if used
    // sessionStorage.clear(); // Uncomment if you want to clear session storage

    // Redirect to the login page or home page after logout
    window.location.href = 'login.html'; // Change 'login.html' to your login page URL
}

























