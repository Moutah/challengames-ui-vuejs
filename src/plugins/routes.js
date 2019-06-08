import VueRouter from 'vue-router'

import MainPage from '../components/MainPage'
import MyChallengesPage from "../components/MyChallengesPage"
import RankingPage from "../components/RankingPage"

const router = new VueRouter({
    routes: [
        {path: '/', component: MainPage},
        {path: '/myChallenges', component: MyChallengesPage},
        {path: '/ranking', component: RankingPage}
    ]
})

export default router
