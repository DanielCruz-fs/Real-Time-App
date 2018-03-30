<template>
	 
	 <div v-if=question>
	 
	 <edit-question v-if="editing" :data=question></edit-question>	
	 <div v-else>
	     <show-question :data=question></show-question>	
	 </div>
	 	
	 <replies :question=question></replies>

	 <new-reply v-if="loggedIn" :questionSlug=question.slug></new-reply>
	 <router-link v-else to="/login">Login para responder =)</router-link>	
	 </div>
	 
</template>
<script>
 import ShowQuestion from './ShowQuestion';
 import EditQuestion from './EditQuestion';
 import Replies from './reply/Replies';
 import NewReply from './reply/NewReply';

 export default{
 	 components:{ShowQuestion, EditQuestion, Replies, NewReply},
 	 data(){
 	 	 return{
 	 	 	 question:null,
 	 	 	 editing: false
 	 	 }
 	 },
 	 created(){
 	 	 this.listen();
 	 	 axios.get('/api/question/' + this.$route.params.slug).then(res => this.question = res.data.data)
 	 	 .catch(error => console.log(error.response.data));
 	 },
 	 computed:{
 		 loggedIn(){
 		 	 return User.loggedIn();
 		 }
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