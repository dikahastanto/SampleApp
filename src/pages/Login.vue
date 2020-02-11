<template>
  <q-page padding class="row items-center justify-center">
    <div class="row full-width">
      <div class="col-xs-12 q-pl-md q-pr-md q-pt-sm">
        <q-card flat class="bg-white text-black">
          <div class="row">
            <q-img src="statics/login.png"></q-img>
          </div>
        </q-card>
      </div>
      <div class="col-xs-12 q-pl-md q-pr-md q-pt-sm">
        <q-card flat class="bg-white text-black">
          <div class="row q-col-gutter-md">
            <q-form @submit="login()" class="full-width">
              <q-input
                v-model="nik"
                label="NIK"
                :rules="[ val => val && val.length > 0 || 'Isi NIK Anda']"
                />
              <q-input
                v-model="password"
                label="Password"
                type="password"
                :rules="[ val => val && val.length > 0 || 'Isi Password Anda']"
                />
              <div class="q-mt-md">
                <q-btn type="submit" unelevated color="primary" no-caps label="Login" class="full-width"></q-btn>
              </div>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      nik: null,
      password: null
    }
  },
  methods: {
    login () {
      try {
        this.$axios.post('loginpetani', {
          nik: this.nik,
          password: this.password
        }).then(res => {
          if (!res.data.sukses) {
            this.$show(res.data.msg, 'negative')
          } else {
            this.$q.localStorage.set('datauser', res.data.user)
            this.$router.push({ name: 'home' })
          }
        })
      } catch (error) {
        this.$show('Terjadi Kesalahan', 'negative')
      }
    }
  }
}
</script>
