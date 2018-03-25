<template>
	 
	 <div>
	 
	 <edit-question v-if="editing" :data=question></edit-question>	
	 <div v-else>
	     <show-question :data=question></show-question>	
	 </div>
	 	
	 </div>
	 
</template>
<script>
 import ShowQuestion from './ShowQuestion';
 import EditQuestion from './EditQuestion';
 export default{
 	 components:{ShowQuestion, EditQuestion},
 	 data(){
 	 	 return{
 	 	 	 question:{},
 	 	 	 editing: false
 	 	 }
 	 },
 	 created(){
 	 	 this.listen();
 	 	 axios.get('/api/question/' + this.$route.params.slug).then(res => this.question = res.data.data)
 	 	 .catch(error => console.log(error.response.data));
 	 },
 	 methods:{
 	 	 listen(){
 	 	 	 EventBus.$on('starEditing', () => {
 	 	 	 	 this.editing = true;
 	 	 	 });

 	 	 	 EventBus.$on('cancelEditing', () => {
 	 	 	 	 this.editing  = false;
 	 	 	 });
 	 	 }
 	 }
 }
</script>
<style>
	
</style>