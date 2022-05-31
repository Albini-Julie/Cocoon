<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>
  <h3 class="text-center font-work-sans text-3xl font-semibold">Qui sont les invités ?</h3>
  <p class="mt-5 text-center font-work-sans text-[14px]">
    Plusieurs artistes nous ont fait l’honneur de venir pour cette nouvelle édition de Cocoon ! Première participation ou habitués,
    n’hésitez pas à cliquez sur les liens pour en apprendre plus !
  </p>

  <div class="card bg-dark">
    <div class="card-header">
      <h4 class="my-8 text-center font-work-sans text-2xl font-bold">
        Liste des artistes présents lors de Cocoon
        <span class="float-right" title="Créer un nouvel artiste">
          <router-link to="/createArtiste">
            <i class="fa fa-plus fa-lg text-light"></i>
          </router-link>
        </span>
      </h4>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" class="w-1/4">Image</th>
            <th scope="col" class="1/4">Surnom</th>
            <th scope="col" class="1/4">Date de Naissance</th>
            <th scope="col" class="1/4">Genre</th>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <img class="mt-10" src="../../public/artistes_solos.svg" alt="artistes solos" />
  <card
    image="/public/AmelBent/AmelBent_artiste.webp"
    titre="Amel Bent"
    genre="Pop"
    presentation="Amel Bent est une chanteuse et actrice française de 36 ans. Née dans l’Indre et Loire, c’est sa prestation en 2004 à la saison 2 de Nouvelle Star qui l’a révélée."
  />

  <card
    class="mt-12"
    image="/public/Vald/Vald_artiste.jpg"
    titre="Vald"
    genre="Rap"
    presentation="Vald, ou Valentin Le Du, est né le 15 juillet 1992 en Seine-Saint-Denis et est une figure de la scène du rap français. Remarqué sur Internet par ses montages, ses deux premiers albums ont été récompensés d’un double disque de platine."
  />

  <card
    class="mt-12"
    image="/public/Angèle/Angèle_artiste.jpg"
    titre="Angèle"
    genre="Pop"
    presentation="Angèle Van Laeken de son vrai nom, est une chanteuse, interprète et musicienne belge qui a sorti son premier album en 2018. Elle est très investie dans les causes qui lui tiennent à coeur comme le féminisme, qu’elle défend dans ses chansons."
  />

  <card
    class="mt-12"
    image="/public/Orelsan/Orelsan_artiste.webp"
    titre="Orelsan"
    genre="Rap"
    presentation="Orelsan est un chanteur, rappeur et compositeur français de 39 ans qui a marqué sans aucun doute le rap français. Il se distingue par son originalité et sa capacité à nous faire réfléchir dans ses musiques."
  />

  <img class="mt-10" src="../../public/artistes_groupes.svg" alt="artistes groupe" />

  <card
    class="mt-12"
    image="/public/Indochine/Indochine_groupe.jpg"
    titre="Indochine"
    genre="Rock"
    presentation="Indochine est un groupe française de pop-rock. Il a été formé en 1981 par Nicolas Sirkis et Dominique Nicolas. Malgré les nombreux changements de musiciens dans le groupe, Indochine aura marqué plus d’une génération avec ses titres."
  />

  <card
    class="mt-12"
    image="/public/Shakaponk/Shakaponk_artiste.jpg"
    titre="Shaka Ponk"
    genre="Rock"
    presentation="Ce groupe de rock alternatif et rock électronique français a été fondé en 2002. Composé de 7 membres, ce groupe aime mélanger plusieurs styles musicaux pour ses créations."
  />

  <Footer class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/cardArtiste.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

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
