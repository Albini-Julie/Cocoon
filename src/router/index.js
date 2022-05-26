import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Accueil', name: 'Accueil', component: AccueilView },
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/Artiste', name: 'Artiste', component: ArtisteView },
    { path: '/Concert', name: 'Concert', component: ConcertView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/MentionsLegales', name: 'Mentionslegales', component: MentionslegalesView },
    { path: '/Programmation', name: 'Programmation', component: ProgrammationView },
    // ici les autre routes
  ]
})

export default router
