import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        mainDescription: 'An app to defy your friends on gaming challenges !',
        createChallengeForAStart: "The best way to start is to create a challenge, don't you think?",
        createChallengeMainPageTitle: "What's next?",
        mostRecentChallengesTitle: "Most recent challenges",
        cannotCreateChallengeLabel: "Unfortunately, you need to be connected to create a challenge...",
        cannotCreateChallengeButLoginLabel: "However, you can login on the top left handside of this page (in the navigation bar) ! Do it quick !",

        challengeNameTitle: 'Challenge names',

        newChallengePopupTitle: 'New challenge',

        connectedAs: 'Connected as',

        homeLabel: 'Home',
        addNewChallengeLabel: "Add a new challenge",
        myChallengesLabel: "My challenges",
        rankingLabel: 'Ranking'
    },
    'fr': {
        mainDescription: 'Une application pour défier ces amis à des challenges liés aux jeux vidéos',
        createChallengeForAStart: "Le meilleur moyen de commencer, c'est de créer un challenge, non?",
        createChallengeMainPageTitle: "Et maintenant?",

        mostRecentChallengesTitle: "Challenges les plus récents",
        cannotCreateChallengeLabel: "Malheureusement il est nécessaire d'être connecté pour créer un challenge...",
        cannotCreateChallengeButLoginLabel: "Par contre, vous pouvez vous connecter en haut à gauche (dans la barre de navigation) ! Faites le vite !",

        challengeNameTitle: "Nom des challenges",

        newChallengePopupTitle: 'Nouveau challenge',

        connectedAs: 'Connecté en tant que',

        homeLabel: "Accueil",
        addNewChallengeLabel: "Ajouter un nouvel challenge",
        myChallengesLabel: "Mes challenges",
        rankingLabel: 'Classement'
    }
};
const i18n = new VueI18n(
    {
        locale: 'en', // set locale
        fallbackLocale: 'fr', // set fallback locale
        messages, // set locale messages
    }
);

export default i18n;
