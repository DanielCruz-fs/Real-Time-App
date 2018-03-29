<template>
  <v-card flat>
    <v-toolbar dark color="indigo darken-1" flat extended>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar elevation-12">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 black--text"><h2>Nerdy</h2></v-toolbar-title>
            <v-spacer></v-spacer>

             <app-notification v-if="loggedIn"></app-notification>

            <div class="hidden-sm-and-down">

            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
               <v-btn flat>{{item.title}}</v-btn>  
            </router-link>
           
            </div>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import AppNotification from './AppNotification';
 export default{
   components:{AppNotification},
   data(){
     return{
       loggedIn: User.loggedIn(),
       items:[
         {title:'Blog', to:'/forum', show:true},
         {title:'Login', to:'/login', show:!User.loggedIn()},
         {title:'Postear', to:'/ask', show:User.loggedIn()},
         {title:'Categorias', to:'/category', show:User.admin()},
         {title:'Logout', to:'/logout', show:User.loggedIn()}
       ]
     }
   },
   created(){
     EventBus.$on('logout', () => {
       User.logout();
     });
   }

 }  
</script>
<style>
 .card--flex-toolbar {
   margin-top: -92px;
}
</style>