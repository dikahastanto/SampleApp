<template>
  <q-page padding>
    <q-form @submit="submit" class="q-gutter-md">
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Tahun']" v-model="inputData.tahun" type="number" label="Tahun" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Pupuk ZA']" v-model="inputData.jumlahZa" type="number" label="Jumlah Pupuk ZA" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Pupuk NPK']" v-model="inputData.jumlahNpk" type="number" label="Jumlah Pupuk NPK" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Pupuk Sp36']" v-model="inputData.jumlahSp36" type="number" label="Jumlah Pupuk SP-36" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Pupuk Urea']" v-model="inputData.jumlahUrea" type="number" label="Jumlah Pupuk Urea" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Pupuk Organik']" v-model="inputData.jumlahOrganik" type="number" label="Jumlah Pupuk Organik" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Gabah']" v-model="inputData.jumlahGabah" type="number" label="Jumlah Panen Gabah" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Gabah Kering']" v-model="inputData.jumlahGabahKering" type="number" label="Jumlah Panen Gabah Kering" filled></q-input>
      <q-input :rules="[ val => val && val.length > 0 || 'Isi Jumlah Beras']" v-model="inputData.jumlahBeras" type="number" label="Jumlah Pupuk Beras" filled></q-input>
      <div>
        <q-btn type="submit" class="full-width" unelevated color="primary" no-caps label="Input"/>
      </div>
    </q-form>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      inputData: {
        tahun: null,
        jumlahZa: null,
        jumlahNpk: null,
        jumlahSp36: null,
        jumlahUrea: null,
        jumlahOrganik: null,
        jumlahGabah: null,
        jumlahGabahKering: null,
        jumlahBeras: null
      }
    }
  },
  methods: {
    submit () {
      Object.assign(this.inputData, {
        nik: this.$q.localStorage.getItem('datauser').nik
      })
      try {
        this.$axios.post('inputrut', this.inputData)
          .then(res => {
            if (res.data.sukses) {
              this.$show(res.data.msg, 'positive')
              this.$router.push({ name: 'home' })
            } else {
              this.$show(res.data.msg, 'negative')
            }
          }).catch(() => {
            this.$show('Mohon Isi Data', 'negative')
          })
      } catch (error) {
        this.$show('Terjadi Kesalahan', 'negative')
      }
    }
  }
}
</script>
