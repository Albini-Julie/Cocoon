<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div>
        <div class="flex">
          <h4 class="mx-auto mb-10 font-work-sans font-semibold">Suppression d'un artiste</h4>
        </div>

        <div>
          <div class="flex">
            <div class="flex items-center">
              <div class="ml-5 w-3/4">
                <img class="preview img-fluid" :src="photoActuelle" />
              </div>
            </div>

            <div class="flex w-2/4 flex-col items-center">
              <div>
                <div class="font-work-sans text-[20px] font-semibold text-white">
                  <span>Surnom</span>
                </div>
                <input
                  class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                  placeholder="Surnom de l'artiste"
                  v-model="artiste.surnom"
                  disabled
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold text-white">
                  <span>Date de naissaance</span>
                </div>
                <input
                  class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                  placeholder="Genre de musique"
                  v-model="artiste.date_naissance"
                  disabled
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold text-white">
                  <span>Genre</span>
                </div>
                <input
                  class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                  v-model="artiste.type"
                  disabled
                />
              </div>
              <br />
            </div>
          </div>
          <br />
          <div class="bg-blue-700 p-5">
            <h5 class="text-center font-work-sans text-xl font-semibold" role="alert">
              Attention vous allez supprimer cet artiste, cette action est irréversible !
            </h5>
          </div>
        </div>

        <div class="mt-5 flex justify-around">
          <button type="submit" class="form-control rounded-xl bg-red-700 p-2 font-work-sans text-[20px] font-semibold text-white">
            Supprimer
          </button>
          <button class="form-control rounded-xl bg-green-700 p-2 font-work-sans text-[20px] font-semibold text-white">
            <RouterLink to="/Artistes">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
// Bibliothèque Firestore : import des fonctions
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteView",
  components: {
    HeaderMobile,
    HeaderOrdi,
  },
  data() {
    return {
      artiste: {
        // Le participant à créer
        surnom: null,
        date_naissance: null,
        image: null,
        type: null,
      },

      refArtiste: null, // Référence du participant à modifier
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getArtiste(this.$route.params.id);
  },

  methods: {
    async getArtiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "Artiste", id);
      // Référence du participant concerné
      this.refArtiste = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.image;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "ImgArtiste/" + this.artiste.image);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      // Suppresion du participant
      await deleteDoc(doc(firestore, "Artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "ImgArtiste/" + this.artiste.image);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/Artistes");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>


