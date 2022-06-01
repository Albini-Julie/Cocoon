import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import GuideStyleView from "../views/GuideStyle.vue"
import CreateArtiste from "../views/createArtiste.vue"
import UpdateArtiste from "../views/updateArtiste.vue"
import DeleteArtiste from "../views/deleteArtiste.vue"
import Page404 from "../views/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/Artiste', name: 'Artiste', component: ArtisteView },
    { path: '/Concert', name: 'Concert', component: ConcertView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/MentionsLegales', name: 'Mentionslegales', component: MentionslegalesView },
    { path: '/Programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/style-guide', name: 'GuideStyle', component: GuideStyleView },
    { path: '/createArtiste', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/updateArtiste', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/deleteArtiste', name: 'DeleteArtiste', component: DeleteArtiste },
    { path: '/404', name: 'Page404', component: Page404 },
    
    // ici les autre routes
  ]
})

export default router
