<template>
	 <v-container>
	 	<v-flex xs10 offset-xs1>
			  <v-card>
			    <v-card-text>
			      <v-container fluid>
			       
			      		 <form @submit.prevent="update">
						    
						    <v-text-field label="Titulo" v-model="form.title" type="text" required></v-text-field>
					
						    <v-text-field name="input-7-1" label="Contenido" v-model="form.body" multi-line></v-text-field>

						     <v-btn block color="indigo" type="submit" dark>Guardar</v-btn>
						     <v-btn block dark @click="cancel">Cancelar</v-btn>
						  </form>

			      </v-container>
			    
			    </v-card-text>
			   
			  </v-card>
      </v-flex>
	 </v-container>
</template>
<script>
 export default{
 	 props:['data'],
 	 data(){
 	 	 return {
 	 	 	 form:{
 	 	 	 	 tile:null,
 	 	 	 	 body:null
 	 	 	 }
 	 	 }
 	 },
 	 methods:{
   		 cancel(){
   		 	 EventBus.$emit('cancelEditing');
   		 },
   		 update(){
   		 	 axios.put('/api/question/' + this.data.slug, this.form).then(res => this.cancel())
   		 	 .catch(error => console.log(error.response.data));
   		 }
 	 },
 	 mounted(){
 	 	 this.form = this.data;
 	 }

 }
</script>
<style>
	
</style>