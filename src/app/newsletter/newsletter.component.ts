import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {


  textNewsletter = 'Você pode receber os melhores descontos!';
  email = 'teste@teste.com.br';
  isEmailSend = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitNewsletter(){
    this.textNewsletter = 'Email enviado.';
    this.isEmailSend = true;
  }

  onEmailEnter(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

}
