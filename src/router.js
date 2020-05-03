import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dashboardUser = () => import(/* webpackChunkName: "dashboard" */ './views/admins/dashboardAdmin.vue')
const navbarBefore = () => import(/* webpackChunkName: "navbarbefore" */ './views/Homepage.vue')  
const navbarAfter = () => import(/* webpackChunkName: "navbarbefore" */ './views/users/Homepage.vue') 

function loadView(view) {
    return () => import(/* webpackChunkName: "view[request]" */ `./views/admins/adminContents/${view}.vue`) 
}

function loadViewBefore(view) {
  return () => import(/* webpackChunkName: "view[request]" */ `./views/${view}.vue`) 
}

function loadViewAfter(view) {
  return () => import(/* webpackChunkName: "view[request]" */ `./views/users/${view}.vue`) 
}

    Vue.use(Router)   
    //const router = new Router({mode: 'history', routes: routes})   

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: navbarBefore,
      children: [
        {
          path: '',
          name: 'Welcome',
          component: loadViewBefore('Welcome')           
        },
        {
          path: '/views/DaftarProduk',
          name: 'DaftarProduk',
          component: loadViewBefore('DaftarProduk')           
        },
        {
          path: '/views/signin',
          name: 'SignIn',
          component: loadViewBefore('SignIn')
        },
        {
          path: '/views/signup',
          name: 'SignUp',
          component: loadViewBefore('SignUp')
        },
        {
          path: '/views/about',
          name: 'about',
          component: loadViewBefore('About')
        },
      ]
    },
    {
      path: '/views/users',
      component: navbarAfter,
      children: [
        {
          path: '/views/users/',
          name: 'Welcome',
          component: loadViewAfter('Welcome')           
        },
        {
          path: '/views/users/produkUser',
          name: 'produkUser',
          component: loadViewAfter('produkUser')
        },
        {
          path: '/views/users/layananUser',
          name: 'layananUser',
          component: loadViewAfter('layananUser')           
        },
        {
          path: '/views/users/transaksiCS',
          name: 'transaksiCS',
          component: loadViewAfter('transaksiCS')           
        },
        {
          path: '/views/users/aboutUser',
          name: 'aboutUser',
          component: loadViewAfter('About')
        },
      ]
    },    
    {       
      path: '/admins/dashboardAdmin',       
      component: dashboardUser,       
      children: [         
          {           
              name: 'userAdmin',           
              path: '/admins/adminContents/userAdmin',           
              component: loadView('userAdmin')         
          },
          {           
            name: 'welcomeAdmin',           
            path: '/admins/adminContents/welcomeAdmin',           
            component: loadView('welcomeAdmin')         
          },
          {           
            name: 'lyricAdmin',           
            path: '/admins/adminContents/lyricAdmin',           
            component: loadView('lyricAdmin')         
          },
          {           
            name: 'commentAdmin',           
            path: '/admins/adminContents/commentAdmin',           
            component: loadView('commentAdmin')         
          },
          {           
            name: 'layanan_Admin',           
            path: '/admins/adminContents/layanan_Admin',           
            component: loadView('layanan_Admin')         
          },
          {
            name: 'produkAdmin',           
            path: '/admins/adminContents/produk_Admin',           
            component: loadView('produk_Admin')
          },
          {
            name: 'pegawai_Admin',           
            path: '/admins/adminContents/pegawai_Admin',           
            component: loadView('pegawai_Admin')
          },
          {
            name: 'customer_Admin',           
            path: '/admins/adminContents/customer_Admin',           
            component: loadView('customer_Admin')
          },
          {
            name: 'supplier_Admin',           
            path: '/admins/adminContents/supplier_Admin',           
            component: loadView('supplier_Admin')
          },    
          {
            name: 'hewan_Admin',           
            path: '/admins/adminContents/hewan_Admin',           
            component: loadView('hewan_Admin')
          },
          {
            name: 'jenisHewan_Admin',           
            path: '/admins/adminContents/jenisHewan_Admin',           
            component: loadView('jenisHewan_Admin')
          },
          {
            name: 'ukuranHewan_Admin',           
            path: '/admins/adminContents/ukuranHewan_Admin',           
            component: loadView('ukuranHewan_Admin')
          },
          {
            name: 'pengadaan_Admin',           
            path: '/admins/adminContents/pengadaan_Admin',           
            component: loadView('pengadaan_Admin')
          },
          {
            name: 'pengadaan2_Admin',           
            path: '/admins/adminContents/pengadaan2_Admin',           
            component: loadView('pengadaan2_Admin')
          },
          {
            name: 'penjualanLayanan_Admin',           
            path: '/admins/adminContents/penjualanLayanan_Admin',           
            component: loadView('penjualanLayanan_Admin')
          },
          {
            name: 'penjualanProduk_Admin',           
            path: '/admins/adminContents/penjualanProduk_Admin',           
            component: loadView('penjualanProduk_Admin')
          },
      ]     
  }, 
  ],
})