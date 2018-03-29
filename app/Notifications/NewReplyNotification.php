<?php

namespace App\Notifications;

use App\Reply;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewReplyNotification extends Notification
{
    use Queueable;
    public $reply;


    public function __construct(Reply $reply)
    {
         $this->reply = $reply;
    }
    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
             'replyBy'  => $this->reply->user->name,
             'question' => $this->reply->question->title,
             'path'     => $this->reply->question->path,
        ];
    }
}
