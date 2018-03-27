<template>
	 <v-container>
	 	<v-flex xs10 offset-xs1>
			  <v-card>
			    <v-card-text>
			      <v-container fluid>
			       
			      		 <form @submit.prevent="create">
						    
						    <v-text-field name="input-7-1" label="Contenido" v-model="form.body" multi-line required></v-text-field>

						     <v-btn block color="indigo" type="submit" dark>Responder</v-btn>
						  </form>

			      </v-container>
			    
			    </v-card-text>
			
			  </v-card>
      </v-flex>
	 </v-container>
</template>
<script>
 export default{
 	 props:['questionSlug'],
 	 data(){
 	 	 return{
 	 	 	 form:{
 	 	 	 	 body:null
 	 	 	 }
 	 	 }
 	 },
 	 methods:{
 	 	 create(){
 	 	 	 axios.post('/api/question/' + this.questionSlug + '/reply', this.form).then(res =>{
 	 	 	 	 this.form.body = '';
 	 	 	 	 EventBus.$emit('newReply', res.data);
 	 	 	 	 window.scrollTo(0,0);
 	 	 	 })
 	 	 }
 	 }
 }	
</script>
<style>
	
</style>