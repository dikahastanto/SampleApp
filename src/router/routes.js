
const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/petani/Index.vue') }
    ],
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inputrut', name: 'Input Rut', component: () => import('pages/petani/InputRdkk.vue') },
      { path: 'tampilrdkk', name: 'Tampil RDKK', component: () => import('pages/petani/tampilRdkk.vue') },
      { path: 'hasilpanen', name: 'Hasil Panen', component: () => import('pages/petani/hasilPanen.vue') }
    ],
    meta: {
      requiredLogin: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
