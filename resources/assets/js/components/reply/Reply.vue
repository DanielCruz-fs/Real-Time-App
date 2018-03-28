<template>
      <v-card color="indigo lighten-5" class="black--text mt-2">
              <v-card-title primary-title>
              	
                <div class="title">
                 {{data.user}} {{data.created_at}}
                 
                </div>

                

                <edit-reply v-if="editing" :reply=data></edit-reply>

                <div v-else>{{data.reply}}</div>

              </v-card-title>

              <like :content=data></like>
              
              <v-card-actions v-if="!editing">
                <div v-if="owner">
		        	<v-btn fab icon small @click="edit">
		 	 	 	 <v-icon color="blue">edit</v-icon>
		 	 	 </v-btn>
		 	 	 <v-btn fab icon small @click="destroy">
		 	 	 	 <v-icon color="red">delete</v-icon>
		 	 	 </v-btn>
		        </div>
              </v-card-actions>
       </v-card>
</template>
<script>
import EditReply from './EditReply';
import Like from '../like/Like';
 export default{
 	 props:['data', 'index'],
 	 components:{EditReply, Like},
 	 data(){
 	 	 return{
 	 	 	 editing:false
 	 	 }
 	 },
 	 created(){
 	 	 this.listen();
 	 },
 	 computed:{
 	 	 owner(){
 	 	 	 return User.own(this.data.user_id);
 	 	 }
 	 },
 	 methods:{
 	 	 destroy(){
 	 	 	 EventBus.$emit('deleteReply', this.index);
 	 	 },
 	 	 edit(){
 	 	 	 this.editing = true;
 	 	 },
 	 	 listen(){
 	 	 	 EventBus.$on('cancelEditing', () => {
 	 	 	 	 this.editing = false;
 	 	 	 });
 	 	 }
 	 }
 }	
</script>
<style>
	
</style>