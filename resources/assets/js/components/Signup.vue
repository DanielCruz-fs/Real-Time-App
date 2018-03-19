<template>
	 <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Mis Datos:</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>

                <v-form @submit.prevent="signup">

                  <v-text-field prepend-icon="perm_identity" name="name" label="Nombre Completo" type="text" v-model="form.name"></v-text-field>
                  <span class="red--text" v-if="errors.name">El nombre completo es requerido.</span>

                  <v-text-field prepend-icon="mail" name="email" label="E-mail" type="text" v-model="form.email"></v-text-field>
                  <span class="red--text" v-if="errors.email">El e-mail es requerido.</span>

                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="form.password"></v-text-field>
                  <span class="red--text" v-if="errors.password">El password es requerido.</span>

                  <v-text-field prepend-icon="lock_outline" name="password_confirmation" label="Confirmar Password" id="password_confirmation" type="password" v-model="form.password_confirmation"></v-text-field>

                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo darken-2" class="body-2 white--text" type="submit">Registrar</v-btn>
                  </v-card-actions>

                </v-form>

              </v-card-text>
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>	
</template>
<script>
 export default{
 	 data(){
 	 	 return{
 	 	 	 form:{
 	 	 	 	 name: null,
 	 	 	 	 email: null,
 	 	 	 	 password: null,
 	 	 	 	 password_confirmation: null
 	 	 	 },
 	 	 	 errors:{}
 	 	 }
 	 },
 	 created(){
         if(User.loggedIn()){
       		 this.$router.push({name: 'forum'});
         }
     },
 	 methods:{
 	 	 signup(){
 	 	 	 axios.post('/api/auth/signup', this.form).then(res => { User.responseAfterLogin(res)
 	 	 	 this.$router.push({name: 'forum'})
 	 	 	 }).catch(error => this.errors = error.response.data.errors);
 	 	 }
 	 }
 }	
</script>
<style>

</style>