<template>
    <q-page>
        <div v-if="loaded" class="q-pa-md blue-grey-14" style="max-width: 350px">Data Perkiraan Panen Tahun {{ data.tahun }}</div>
        <div class="q-pa-md" style="max-width: 350px">
            <q-list v-if="loaded">
                <q-item class="bg-blue-grey-1">
                    <q-item-section>
                        <q-item-label>{{ data.jumlahGabah }} Kg</q-item-label>
                        <q-item-label caption>Jumlah Gabah</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="bg-blue-grey-1 q-mt-md">
                    <q-item-section>
                        <q-item-label>{{ data.jumlahGabahKering }} Kg</q-item-label>
                        <q-item-label caption>Jumlah Gabah Kering</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="bg-blue-grey-1 q-mt-md">
                    <q-item-section>
                        <q-item-label>{{ data.jumlahBeras }} Kg</q-item-label>
                        <q-item-label caption>Jumlah Beras</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      data: null,
      loaded: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
        this.$axios.get('datarut/' + this.$q.localStorage.getItem('datauser').nik)
          .then(res => {
            if (res.data.sukses) {
              this.data = res.data.result
              this.loaded = true
            } else {
              this.$show(res.data.msg, 'positive')
            }
          })
      } catch (error) {
        this.$show('Terjadi Kesalahan', 'negative')
      }
    }
  }
}
</script>
