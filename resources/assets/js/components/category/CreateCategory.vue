<template>
<v-container>
	 	<v-flex xs10 offset-xs1>
			  <v-card>
			    <v-card-text>
			      <v-container fluid>
			       
			      		 <form @submit.prevent="create">
						    
						    <v-text-field label="Categoria" v-model="form.name" type="text" required></v-text-field>

						     <v-btn block color="pink" type="submit" dark v-if="editSlug">Actualizar</v-btn>
						     <v-btn block color="indigo" type="submit" dark v-else>Crear</v-btn>
						  </form>

			      </v-container>
			    
			    </v-card-text>
			   
			  </v-card>
			  <v-card class="mt-2">
			  	 <v-toolbar color="pink" dark>
			  	 	 <v-toolbar-title>Categorias</v-toolbar-title>
			  	 </v-toolbar>

			  	 <v-list>
				 	 <v-list-tile v-for="(category, index) in categories" :key="category.id">
				 	 	 <v-list-tile-content>
				 	 	 	 <v-list-tile-title>{{category.name}}</v-list-tile-title>

				 	 	 </v-list-tile-content>
				 	 	 <v-btn fab icon small @click="edit(index)">
				 	 	 	 <v-icon color="blue">edit</v-icon>
				 	 	 </v-btn>
				 	 	 <v-btn fab icon small @click="destroy(category.slug, index)">
				 	 	 	 <v-icon color="red">delete</v-icon>
				 	 	 </v-btn>
				 	 </v-list-tile>

				 </v-list>
			  </v-card>

			  
      </v-flex>
	 </v-container>
</template>
<script>
 export default{
 	 data(){
 	 	 return{
 	 	 	 form:{
 	 	 	 	 name:null
 	 	 	 },
 	 	 	 categories:{},
 	 	 	 editSlug:null
 	 	 }
 	 },
 	 created(){
 	 	 if(User.admin()){
 	 	 	 axios.get('/api/category').then(res => this.categories = res.data.data)
 	 	 	 .catch(error => console.log(error.response.data));
 	 	 }else{
 	 	 	 this.$router.push('/forum');
 	 	 }
 	 },
 	 methods:{
 	 	 create(){
 	 	 	 if(this.editSlug){
 	 	 	 	 this.update();
 	 	 	 }
 	 	 	 else{
 	 	 	 	 axios.post('/api/category', this.form).then(res => {
 	 	 	 	 this.categories.push(res.data);
 	 	 	 	 this.form.name = null;
 	 	 	 	 }).catch(error => console.log(error.response.data));
 	 	 	 }
 	 	 },
 	 	 destroy(slug,index){
 	 	 	 axios.delete('/api/category/' + slug).then(res => this.categories.splice(index,1))
 	 	 	 .catch(error => console.log(error.response.data));
 	 	 },
 	 	 edit(index){
 	 	 	 this.form.name = this.categories[index].name;
 	 	 	 this.editSlug = this.categories[index].slug;
 	 	 	 this.categories.splice(index,1);
 	 	 },
 	 	 update(){
 	 	 	 axios.put('/api/category/' + this.editSlug, this.form).then(res => {
 	 	 	 	 this.categories.push(res.data);
 	 	 	 	 this.form.name = null;
 	 	 	 	 }).catch(error => console.log(error.response.data));
 	 	 }
 	 }
 }
</script>
<style>
	
</style>