<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>
  <div class="dark:bg-black dark:text-white">
    <h3 class="text-center font-work-sans text-3xl font-semibold">Qui sont les invités ?</h3>
    <p class="mt-5 text-center font-work-sans">
      Plusieurs artistes nous ont fait l’honneur de venir pour cette nouvelle édition de Cocoon ! Première participation ou habitués,
      n’hésitez pas à cliquez sur les liens pour en apprendre plus !
    </p>

    <div class="flex items-center">
      <h4 class="my-8 flex-auto text-center font-work-sans text-2xl font-bold">Liste des artistes présents lors de Cocoon</h4>
      <div>
        <span class="" title="Créer un nouvel artiste">
          <router-link to="/createArtiste">
            <Plus class="mr-10 dark:bg-white" />
          </router-link>
        </span>
      </div>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" class="w-1/5">Image</th>
            <th scope="col" class="w-1/5">Surnom</th>
            <th scope="col" class="w-1/5">Date de Naissance</th>
            <th scope="col" class="w-1/5">Genre</th>
            <th scope="col" class="w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="art in listeArtistes" :key="art.id">
            <td>
              <img class="media-object imageSmall" :src="art.photo" :alt="art.surnom + ' ' + art.date_naissance + ' ' + art.type" />
            </td>
            <td class="text-center">
              {{ art.surnom }}
            </td>
            <td class="text-center">{{ art.date_naissance }}</td>
            <td class="text-center">{{ art.type }}</td>
            <td class="text-center">
              <span title="Modifier l'artiste" class="mr-2">
                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                <RouterLink :to="{ name: 'UpdateArtiste', params: { id: art.id } }">
                  <crayon class="inline-block dark:bg-white" />
                </RouterLink>
              </span>
              <span title="Supprimer le participant" class="mr-2">
                <RouterLink :to="{ name: 'DeleteArtiste', params: { id: art.id } }">
                  <Poubelle class="inline-block dark:bg-white" />
                </RouterLink>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <img class="mt-10 dark:bg-white" src="../../public/artistes_solos.svg" alt="artistes solos" />
    <card
      image="/AmelBent/AmelBent_artiste.jpg"
      titre="Amel Bent"
      genre="Pop"
      presentation="Amel Bent est une chanteuse et actrice française de 36 ans. Née dans l’Indre et Loire, c’est sa prestation en 2004 à la saison 2 de Nouvelle Star qui l’a révélée."
    />

    <card
      class="mt-12"
      image="/Vald/Vald_artiste.jpg"
      titre="Vald"
      genre="Rap"
      presentation="Vald, ou Valentin Le Du, est né le 15 juillet 1992 en Seine-Saint-Denis et est une figure de la scène du rap français. Remarqué sur Internet par ses montages, ses deux premiers albums ont été récompensés d’un double disque de platine."
    />

    <card
      class="mt-12"
      image="/Angèle/Angèle_artiste.jpg"
      titre="Angèle"
      genre="Pop"
      presentation="Angèle Van Laeken de son vrai nom, est une chanteuse, interprète et musicienne belge qui a sorti son premier album en 2018. Elle est très investie dans les causes qui lui tiennent à coeur comme le féminisme, qu’elle défend dans ses chansons."
    />

    <card
      class="mt-12"
      image="/Orelsan/Orelsan_artiste.jpg"
      titre="Orelsan"
      genre="Rap"
      presentation="Orelsan est un chanteur, rappeur et compositeur français de 39 ans qui a marqué sans aucun doute le rap français. Il se distingue par son originalité et sa capacité à nous faire réfléchir dans ses musiques."
    />

    <img class="mt-10 dark:bg-white" src="/artistes_groupes.svg" alt="artistes groupe" />

    <card
      class="mt-12"
      image="/Indochine/Indochine_groupe.jpg"
      titre="Indochine"
      genre="Rock"
      presentation="Indochine est un groupe française de pop-rock. Il a été formé en 1981 par Nicolas Sirkis et Dominique Nicolas. Malgré les nombreux changements de musiciens dans le groupe, Indochine aura marqué plus d’une génération avec ses titres."
    />

    <card
      class="mt-12"
      image="/Shakaponk/Shakaponk_artiste.jpg"
      titre="Shaka Ponk"
      genre="Rock"
      presentation="Ce groupe de rock alternatif et rock électronique français a été fondé en 2002. Composé de 7 membres, ce groupe aime mélanger plusieurs styles musicaux pour ses créations."
    />
  </div>

  <Footer class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/cardArtiste.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Plus from "../components/icons/plus.vue";
import Poubelle from "../components/icons/poubelle.vue";
import crayon from "../components/icons/crayon.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {
    HeaderMobile,
    card,
    Footer,
    HeaderOrdi,
    Plus,
    Poubelle,
    crayon,
  },
  data() {
    return {
      listeArtistes: [],
    };
  },
  mounted() {
    const local = this;
    this.getArtistes(local);
  },
  methods: {
    async getArtistes(local) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "Artiste");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("surnom", "asc"));
      await onSnapshot(q, (snapshot) => {
        local.listeArtistes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(local.listeArtistes);
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeArtistes.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "ImgArtiste/" + personne.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
