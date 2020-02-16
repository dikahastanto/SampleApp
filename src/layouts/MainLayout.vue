<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated class="bg-white">
      <q-toolbar unelevated>
        <q-btn
          flat
          dense
          color="dark"
          round
          @click="$router.go(-1)"
          icon="arrow_back"
          aria-label="Menu"
        />

        <q-toolbar-title class="text-dark">
          {{ $route.name }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
