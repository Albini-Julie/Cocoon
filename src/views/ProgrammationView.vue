<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>

  <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold">Qu’est ce qu’il y a au programme ?</h3>
  <p class="my-5 text-center font-work-sans text-[14px]">
    Découvrez la liste exhaustive de tous les concerts aux programmes de l’édition 2022 de Cocoon et réservez votre place !
  </p>

  <h4 class="my-8 text-center font-work-sans text-2xl font-bold">Liste des concerts de Cocoon</h4>

  <div>
    <table>
      <thead>
        <tr>
          <th scope="col" class="w-1/4">Image</th>
          <th scope="col" class="1/4">Artiste</th>
          <th scope="col" class="1/4">Date</th>
          <th scope="col" class="1/4">Genre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="conc in listeConcerts" :key="conc.id">
          <td>
            <img class="media-object imageSmall" :src="conc.photo" :alt="conc.artiste + ' ' + conc.date + ' ' + conc.type" />
          </td>
          <td class="text-center">
            {{ conc.artiste }}
          </td>
          <td class="text-center">{{ conc.date }}</td>
          <td class="text-center">{{ conc.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <img class="mt-10" src="../../public/musique_rock.svg" alt="musique rock" />

  <card
    image="../../public/Indochine/Indochine.jpg"
    titre="Concert : Indochine"
    genre="Rock"
    presentation="Venez découvrir Indochine lors de leur concert dans le festival Cocoon ! De leurs nouvelles musiques à leurs sons mythiques revivez les sensations qui vous ont fait vibrer !"
  />

  <card
    class="mt-12"
    image="../../public/Shakaponk/ShakaPonk.jpg"
    titre="Concert : Shakaponk"
    genre="Rock"
    presentation="Shaka Ponk fait partie de nos concerts phares pour cette nouvelle édition de Cocoon ! Venez voir leur show spectaculaire en réalité 
virtuelle ! "
  />

  <img class="mt-10" src="../../public/musique_pop.svg" alt="musique pop" />

  <card
    class="mt-12"
    image="../../public/AmelBent/AmelBent_concert.webp"
    titre="Concert : Amel Bent"
    genre="Pop"
    presentation="Amel Bent sera en concert à Cocoon pour nous chanter ses magnifiques musiques qui ont fait danser toutes les générations"
  />

  <card
    class="mt-12"
    image="../../public/Angèle/Angele_concert.jpg"
    titre="Concert : Angèle"
    genre="Pop"
    presentation="Angèle nous fait l’honneur de revenir pour l’édition 2022 de Cocoon ! Venez découvrir l’univers merveilleux d’Angèle mélangé à la réalité virtuelle !"
  />

  <img class="mt-10" src="../../public/musique_rap.svg" alt="musique rap" />

  <card
    class="mt-12"
    image="../../public/Orelsan/Orelsan_concert.jpg"
    titre="Concert : Orelsan"
    genre="Rap"
    presentation="Orelsan nous fait également l’honneur de revenir pour Cocoon 2022 ! C’est avec un grand plaisir que nous l’accueillons puisqu’il a préparé une surprise pour cette nouvelle participation..."
  />

  <card
    class="mt-12"
    image="../../public/Vald/Vald_concert.jpg"
    titre="Concert : Vald"
    genre="Rap"
    presentation="Pour sa première participation, Vald va nous proposer un concert puissant et énergique comme à son habitude ! Il pourrait bien se joindre à la surprise de Orelsan..."
  />

  <Footer class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/cardConcert.vue";
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
      listeConcerts: [],
    };
  },
  mounted() {
    const local = this;
    this.getConcerts(local);
  },
  methods: {
    async getConcerts(local) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "Concert");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("artiste", "asc"));
      await onSnapshot(q, (snapshot) => {
        local.listeConcerts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(local.listeConcerts);
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeConcerts.forEach(function (concert) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "ImgConcert/" + concert.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              concert.photo = url;
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
