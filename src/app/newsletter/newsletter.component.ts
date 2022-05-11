import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {


  textNewsletter = 'Você pode receber os melhores descontos!';
  email = 'teste@teste.com.br';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitNewsletter(){
    this.textNewsletter = 'Email enviado.';
  }

  onEmailEnter(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

}
