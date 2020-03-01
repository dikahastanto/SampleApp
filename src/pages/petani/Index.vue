<template>
  <q-page style="background: #f2f2f2;">
    <div class="row justify-center bg-primary">
      <q-img style="width: 40%;" src="statics/profile.png"></q-img>
    </div>
    <div class="row justify-center bg-primary">
      <div class="text-h6 text-white">{{ nik }}</div>
    </div>
    <div class="row justify-center bg-primary">
      <div class="text-h6 text-white">{{ nama }}</div>
    </div>
    <div class="row justify-center bg-primary q-pb-lg q-pt-md">
      <!-- <q-btn no-caps rounded unelevated color="accent">Profile Petani</q-btn> -->
    </div>
    <div class="row justify-center q-pb-lg q-pt-md" >
      <div class="col-xs-6 q-pa-md" @click="$router.push({ name: 'Input Rut' })">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <center><img width="40%" src="statics/inputrut.png"></center>
              <center><div class="q-pl-md">Input RUT</div></center>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md" @click="$router.push({ name: 'Tampil RDKK' })">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class=" items-center justify-center">
            <center> <img width="40%" src="statics/pupuk.png"></center>
            <center><div class="q-pl-md">RDKK</div></center>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md" @click="$router.push({ name: 'Hasil Panen' })">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <center><img width="40%" src="statics/panen.png"></center>
              <center><div class="q-pl-md">Hasil Panen</div></center>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md" @click="logout">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <center><img width="40%" src="statics/exit.png"></center>
              <center><div class="q-pl-md">Log Out</div></center>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      nik: '',
      nama: ''
    }
  },
  created () {
    let dataUser = this.$q.localStorage.getItem('datauser')
    this.nik = dataUser.nik
    this.nama = dataUser.nama
  },
  methods: {
    logout () {
      this.$q.localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
