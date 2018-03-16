<template>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Ingresa</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>

                <v-form @submit.prevent="login">

                  <v-text-field prepend-icon="mail" name="email" label="E-mail" type="text" v-model="form.email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="form.password"></v-text-field>

                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo darken-2" class="body-2 white--text" type="submit">Login</v-btn>
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
         email:null,
         password:null
       }
     }
   },
   methods:{
     login(){
       axios.post('/api/auth/login', this.form).then(res => console.log(res.data))
       .catch(error => console.log(error.reponse.data));
     }
   }
 }	
</script>
<style>
	
</style>