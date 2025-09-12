<?php

namespace Modules\LandingPage\Emails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
     public $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('Pesan Baru dari Form Kontak Website')
            ->markdown('landingpage::emails.contact');
            // ->view('landingpage::emails.contact') // view ada di module
            // ->with('data', $this->data);

    }
}
