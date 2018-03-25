<template>
	 <v-container>
	 	<v-flex xs10 offset-xs1>
			  <v-card>
			    <v-card-text>
			      <v-container fluid>
			       
			      		 <form @submit.prevent="create">
						    
						    <v-text-field label="Titulo" v-model="form.title" type="text" required></v-text-field>
						    <v-select :items="categories" v-model="form.category_id" item-text="name" item-value="id" label="Category" autocomplete></v-select>
						    <v-text-field name="input-7-1" label="Contenido" v-model="form.body" multi-line></v-text-field>

						     <v-btn block color="indigo" type="submit" dark>Postear</v-btn>
						  </form>

			      </v-container>
			    
			    </v-card-text>
			    <v-snackbar
			      :timeout="timeout"
			      :color="color"
			      :multi-line="mode === 'multi-line'"
			      :vertical="mode === 'vertical'"
			      v-model="snackbar"
			    >
			      {{ text }}
			      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
			    </v-snackbar>
			  </v-card>
      </v-flex>
	 </v-container>
</template>
<script>
 export default{
 data () {
      return {
        snackbar: false,
        color: '',
        mode: '',
        timeout: 6000,
        text: 'Post creado =)',
        form:{
        	 title:null,
        	 category_id:null,
        	 body:null
        },
        categories:{}
      }
    },
    created(){
    	 axios.get('/api/category').then(res => this.categories = res.data.data)
    	 .catch(error => console.log(error.response.data));
    },
    methods:{
    	 create(){
    	 	 axios.post('/api/question', this.form).then(res => this.$router.push(res.data.path))
    	 	 .catch(error => console.log(error.response.data));
    	 	 // this.snackbar = true;
    	 }
    }
 }	
</script>
<style>
.view-question{
 	 margin-top: -8px;
 }
</style>