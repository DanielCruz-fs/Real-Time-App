<template>
	 <v-card class="mt-2">
        <v-list subheader>
          <v-subheader>{{data.user}} {{data.created_at}}</v-subheader>
          <v-list-tile avatar class="avatar-question">
            <v-list-tile-avatar>
              <img src="https://vignette.wikia.nocookie.net/necyklopedie/images/8/87/Facebook_prazdny_profil_01.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="indigo--text subheading">
              	<router-link :to="data.path">
              		{{data.title}}
              	</router-link>	
          	  </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon color="pink darken-1">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-card-text class="content-question">{{data.body}}</v-card-text>
        </v-list>
        
        <v-divider></v-divider>
  
     </v-card>
 
         
</template>
<script>
 export default{
     props:['data']
 }
</script>
<style scoped>
 .avatar-question{
 	 margin-top: -20px;
 }
 .content-question{
 	 margin-top: -22px;
 }
</style>