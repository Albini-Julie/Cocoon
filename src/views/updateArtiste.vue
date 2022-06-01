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
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div>
        <div class="flex">
          <h4 class="mx-auto mb-10 font-work-sans font-semibold">Mise à jour artiste</h4>
        </div>

        <div>
          <div class="flex">
            <div class="flex items-center">
              <div class="ml-5 w-3/4">
                <img class="preview img-fluid" :src="imageData" />
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
                  required
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold text-white">
                  <span>Date de naissance</span>
                </div>
                <input
                  class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                  placeholder="Date de naissance de l'artiste"
                  v-model="artiste.date_naissance"
                  required
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold text-white">
                  <span>Photo</span>
                </div>
                <div>
                  <input
                    class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                    type="file"
                    ref="file"
                    id="file"
                    @change="previewImage"
                  />
                </div>
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold text-white">Genre</span>
                </div>
                <input
                  placeholder="Genre de musique"
                  class="form-control border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
                  required
                  v-model="artiste.type"
                />
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="mt-5 flex justify-around">
          <button class="form-control font-work-sans text-[20px] font-semibold text-white" type="submit">Modifier</button>
          <button class="form-control font-work-sans text-[20px] font-semibold text-white">
            <RouterLink to="/Artistes">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </div>

  <Footer class="mt-40" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue";
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateArtiste",
  components: {
    HeaderMobile,
    HeaderOrdi,
    Footer,
  },
  data() {
    return {
      imageData: null,
      artiste: {
        surnom: null,
        date_naissance: null,
        image: null,
        type: null,
      },
      refArtiste: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },

  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artiste", id);
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateArtiste() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "ImgArtiste/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "ImgArtiste/" + this.artiste.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.image);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "Artiste", this.$route.params.id), this.artiste);
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


