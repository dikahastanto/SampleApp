<template>
  <q-page style="background: #f2f2f2;">
    <div class="row justify-center bg-primary">
      <q-img style="width: 40%;" src="statics/profile.png"></q-img>
    </div>
    <div class="row justify-center bg-primary">
      <div class="text-h6 text-white">187126483423</div>
    </div>
    <div class="row justify-center bg-primary">
      <div class="text-h6 text-white">Bella SVR</div>
    </div>
    <div class="row justify-center bg-primary q-pb-lg q-pt-md">
      <q-btn no-caps rounded unelevated color="accent">Profile Petani</q-btn>
    </div>
    <div class="row justify-center q-pb-lg q-pt-md" >
      <div class="col-xs-6 q-pa-md" @click="$router.push({ name: 'inputRut' })">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <img width="40%" src="statics/inputrut.png">
              <div class="q-pl-md">Input RUT</div>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <img width="40%" src="statics/inputrut.png">
              <div class="q-pl-md">safd</div>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <img width="40%" src="statics/inputrut.png">
              <div class="q-pl-md">safd</div>
            </div>
          </q-card-section>
        </div>
      </div>
      <div class="col-xs-6 q-pa-md">
        <div style="background-color: white;padding-top: 10px;padding-bottom: 10px;">
          <q-card-section>
            <div class="row items-center justify-center">
              <img width="40%" src="statics/inputrut.png">
              <div class="q-pl-md">safd</div>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
  </q-page>
</template>
