import VueRouter from 'vue-router'

import MainPage from '../components/main-page/MainPage'
import MyChallengesPage from "../components/challenges/MyChallengesPage"
import RankingPage from "../components/ranking/RankingPage"

const router = new VueRouter({
    routes: [
        {path: '/', component: MainPage},
        {path: '/myChallenges', component: MyChallengesPage},
        {path: '/ranking', component: RankingPage}
    ]
})

export default router
