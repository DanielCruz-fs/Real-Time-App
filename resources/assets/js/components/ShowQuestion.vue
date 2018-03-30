<template>
	<v-jumbotron
    src="https://ak8.picdn.net/shutterstock/videos/15284968/thumb/1.jpg"
    :gradient="gradient"
    dark class="view-question"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center text-md-right>
          <h3 class="display-1">{{data.title}}</h3>
          <blockquote>{{data.body}}</blockquote>
          <p>{{data.user}} {{data.created_at}}</p>

          <v-chip>
            <v-avatar class="pink white--text">{{replyCount}}</v-avatar>
            <span class="subheading">RESPUESTAS</span>
          </v-chip>

        </v-flex>
      </v-layout>
    </v-container>


    			<v-layout column class="fab-container" v-if="owner">
				    <v-btn fab color="teal" @click="edit">
				      <v-icon>edit</v-icon>
				    </v-btn>
				    <v-btn fab color="red" @click="destroy">
				      <v-icon>delete</v-icon>
				    </v-btn>
				  </v-layout>
				  

  </v-jumbotron>
</template>
<script>
 export default{
 	 props:['data'],
 	 data(){
 	 	return{
     	 // own: User.own(this.data.user_id),
     	 gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
       replyCount: this.data.reply_count
     	 }
     },
     created(){
         EventBus.$on('newReply', () => {
           this.replyCount++;
         });

         EventBus.$on('deleteReply', () => {
           this.replyCount--;
         });

         Echo.private('App.User.' + User.id())
           .notification((notification) => {
             this.replyCount++;
         });

          Echo.channel('deleteReplyChannel').listen('DeleteReplyEvent', (e) => {
             this.replyCount--;
         })
     },
     computed:{
     	 owner(){
     	 	 return User.own(this.data.user_id)
     	 }
     },
     methods:{
     	 destroy(){
     	 	 axios.delete('/api/question/' + this.data.slug).then(res => this.$router.push('/forum'))
     	 	 .catch(error => console.log(error.response.data));
     	 },
     	 edit(){
     	 	 EventBus.$emit('starEditing');
     	 }
     }
 }
</script>
<style>
 .view-question{
 	 margin-top: -8px;

 }
 .fab-container {
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>