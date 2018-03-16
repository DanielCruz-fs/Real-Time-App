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
            <div class="hidden-sm-and-down">
            <router-link to="/forum">
               <v-btn flat>Blog</v-btn>  
            </router-link>
            
            <v-btn flat>Preguntas</v-btn>
            <v-btn flat>Categorias</v-btn>
            <router-link to="/login">
               <v-btn flat>Login</v-btn>
            </router-link>
            </div>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
 export default{

 }  
</script>
<style>
 .card--flex-toolbar {
   margin-top: -92px;
}
</style>