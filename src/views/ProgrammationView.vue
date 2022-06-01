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
    <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold">Qu’est ce qu’il y a au programme ?</h3>
    <p class="my-5 text-center font-work-sans text-[14px]">
      Découvrez la liste exhaustive de tous les concerts aux programmes de l’édition 2022 de Cocoon et réservez votre place !
    </p>

    <h4 class="my-8 text-center font-work-sans text-2xl font-bold">Liste des concerts de Cocoon</h4>
    <form class="ml-5">
      <h4 class="mb-10 font-work-sans font-semibold">Nouveau concert</h4>
      <div class="flex flex-col gap-16 sm:flex-row">
        <input
          type="text"
          v-model="concert.artiste"
          class="form-control w-fit flex-auto grow border-b-2 border-white border-b-gray-900 bg-white"
          placeholder="Artiste"
          required
        />
        <input
          type="text"
          v-model="concert.date"
          class="form-control w-fit flex-auto grow border-b-2 border-white border-b-gray-900 bg-white"
          placeholder="Date"
          required
        />
        <input
          type="text"
          v-model="concert.type"
          class="form-control w-fit flex-auto grow border-b-2 border-white border-b-gray-900 bg-white"
          placeholder="Genre"
          required
        />
        <button type="button" @click="createConcert()" title="Création"><Plus /></button>
      </div>
    </form>

    <div>
      <table class="mt-10 w-full">
        <thead>
          <tr>
            <th scope="col" class="w-1/4">Artiste</th>
            <th scope="col" class="w-1/4">Date</th>
            <th scope="col" class="w-1/4">Genre</th>
            <th scope="col" class="w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="conc in listeConcerts" :key="conc.id">
            <td class="text-center">
              <input type="text" v-model="conc.artiste" required />
            </td>
            <td class="text-center">
              <input type="text" v-model="conc.date" required />
            </td>
            <td class="text-center">
              <input type="text" v-model="conc.type" required />
            </td>
            <td class="flex items-center justify-center">
              <span title="Modifier l'artiste" class="mr-2">
                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                <button type="button" @click="updateConcert(conc)" title="Modification">
                  <crayon />
                </button>
              </span>
              <span title="Supprimer le participant" class="mr-2">
                <button type="button" @click="deleteConcert(conc)" title="Suppression">
                  <Poubelle />
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <img class="mt-10 dark:bg-white" src="../../public/musique_rock.svg" alt="musique rock" />

    <card
      image="/Indochine/Indochine.jpg"
      titre="Concert : Indochine"
      genre="Rock"
      presentation="Venez découvrir Indochine lors de leur concert dans le festival Cocoon ! De leurs nouvelles musiques à leurs sons mythiques revivez les sensations qui vous ont fait vibrer !"
    />

    <card
      class="mt-12"
      image="/Shakaponk/ShakaPonk.jpg"
      titre="Concert : Shakaponk"
      genre="Rock"
      presentation="Shaka Ponk fait partie de nos concerts phares pour cette nouvelle édition de Cocoon ! Venez voir leur show spectaculaire en réalité 
virtuelle ! "
    />

    <img class="mt-10 dark:bg-white" src="../../public/musique_pop.svg" alt="musique pop" />

    <card
      class="mt-12"
      image="/AmelBent/AmelBent_concert.webp"
      titre="Concert : Amel Bent"
      genre="Pop"
      presentation="Amel Bent sera en concert à Cocoon pour nous chanter ses magnifiques musiques qui ont fait danser toutes les générations"
    />

    <card
      class="mt-12"
      image="/Angèle/Angele_concert.jpg"
      titre="Concert : Angèle"
      genre="Pop"
      presentation="Angèle nous fait l’honneur de revenir pour l’édition 2022 de Cocoon ! Venez découvrir l’univers merveilleux d’Angèle mélangé à la réalité virtuelle !"
    />

    <img class="mt-10 dark:bg-white" src="../../public/musique_rap.svg" alt="musique rap" />

    <card
      class="mt-12"
      image="/Orelsan/Orelsan_concert.jpg"
      titre="Concert : Orelsan"
      genre="Rap"
      presentation="Orelsan nous fait également l’honneur de revenir pour Cocoon 2022 ! C’est avec un grand plaisir que nous l’accueillons puisqu’il a préparé une surprise pour cette nouvelle participation..."
    />

    <card
      class="mt-12"
      image="/Vald/Vald_concert.jpg"
      titre="Concert : Vald"
      genre="Rap"
      presentation="Pour sa première participation, Vald va nous proposer un concert puissant et énergique comme à son habitude ! Il pourrait bien se joindre à la surprise de Orelsan..."
    />
  </div>

  <Footer class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/cardConcert.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Plus from "../components/icons/plus.vue";
import crayon from "../components/icons/crayon.vue";
import Poubelle from "../components/icons/poubelle.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc, // Demander une liste de documents d'une collection, en les synchronisant
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
    crayon,
    Poubelle,
  },
  data() {
    return {
      listeConcerts: [],
      concert: {
        artiste: null,
        date: null,
        type: null,
      },
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
      const dbConcert = collection(firestore, "Concert");
      // Liste des participants triés sur leur nom
      const q = query(dbConcert, orderBy("artiste", "asc"));
      await onSnapshot(q, (snapshot) => {
        local.listeConcerts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(local.listeConcerts);
        // Récupération des images de chaque participant
        // parcours de la liste
      });
    },
    async createConcert() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbConcert = collection(firestore, "Concert");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      console.log("Concert", this.concert);
      const docRef = await addDoc(dbConcert, this.concert);
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateConcert(conc) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "Concert", conc.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        artiste: conc.artiste,
        date: conc.date,
        genre: conc.type,
      });
    },

    async deleteConcert(conc) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "Concert", conc.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>
