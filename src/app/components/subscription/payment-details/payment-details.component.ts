import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {

  mpesa:boolean = false;
  card:boolean = true;

  togglePayment(){
    this.mpesa = !this.mpesa
    this.card = !this.card
  }

  @Output() confirmOrder = new EventEmitter<boolean>();

  confirmPayment(){
    this.confirmOrder.emit(true)
  }
  
  }

  