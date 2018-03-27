<template>		
<v-container fluid>

		 <form @submit.prevent="update">
	    
	    <v-text-field name="input-7-1" label="Contenido" v-model="reply.reply" multi-line required></v-text-field>

	     <v-btn block color="indigo" type="submit" dark>Actualizar</v-btn>
	     <v-btn block color="pink" @click="cancel" dark>Cancelar</v-btn>
	  </form>

</v-container>  
</template>
<script>
 export default{
 	 props:['reply'],
 	 methods:{
 	 	 cancel(){
 	 	 	 EventBus.$emit('cancelEditing');
 	 	 },
 	 	 update(){
 	 	 	 axios.put('/api/question/' + this.reply.question_slug + '/reply/' + this.reply.id, {body: this.reply.reply})
 	 	 	 .then(res => this.cancel());
 	 	 }
 	 }

 }
</script>
<style>
	
</style>