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
    <form enctype="multipart/form-data" @submit.prevent="createArtiste">
      <div>
        <div class="flex">
          <h4 class="mx-auto mb-10 font-work-sans font-semibold">Création d'un artiste</h4>
        </div>

        <div>
          <div>
            <div class="flex items-center">
              <div class="ml-5 w-2/4">
                <img class="preview img-fluid" :src="imageData" />
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
                    required
                  />
                </div>
                <br />
                <div>
                  <div class="font-work-sans text-[20px] font-semibold text-white">
                    <span>Date de naissance</span>
                  </div>
                  <input
                    v-model="artiste.date_naissance"
                    class="form-control form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                    placeholder="Naissance de l'artiste"
                    key="required"
                  />
                </div>
                <br />
                <div>
                  <div class="font-work-sans text-[20px] font-semibold text-white">
                    <span class="input-group-text">Photo</span>
                  </div>
                  <input
                    class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                    type="file"
                    ref="file"
                    id="file"
                    @change="previewImage"
                  />
                </div>
                <br />
                <div>
                  <div>
                    <span class="font-work-sans text-[20px] font-semibold text-white">Genre</span>
                  </div>
                  <input
                    class="form-control form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                    v-model="artiste.type"
                    placeholder="Genre de musique"
                    required
                  />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 flex justify-around">
          <button type="submit" class="form-control font-work-sans text-[20px] font-semibold text-white">Créer</button>
          <button class="form-control font-work-sans text-[20px] font-semibold text-white">
            <router-link to="/Artistes">Cancel</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>

  <Footer class="mt-10" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue";
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateArtiste",
  components: {
    HeaderMobile,
    HeaderOrdi,
    Footer,
  },
  data() {
    return {
      imageData: null,
      listePays: [],
      artiste: {
        surnom: null,
        date_naissance: null,
        image: null,
        type: null,
      },
    };
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];

      this.artiste.image = this.file.name;

      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtiste() {
      const storage = getStorage();

      const refStorage = ref(storage, "ImgArtiste/" + this.artiste.image);

      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        const db = getFirestore();
        const docRef = addDoc(collection(db, "Artiste"), this.artiste);
      });
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


