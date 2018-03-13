<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
     protected $table = 'replies';
     protected $fillable = ['body', 'question_id', 'user_id'];

     public function question(){
     	 return $this->belongsTo('App\Question');
     }

     public function user(){
     	 return $this->belongsTo('App\User');
     }

     public function likes(){
     	 return $this->hasMany('App\Like');
     }
}
