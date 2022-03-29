import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRazorpay';
  constructor(private auth: AuthService){}

  /* razor pay integration */
  options = {
    "key": "rzp_test_cqXzBieGD8nr8g", 
    "amount": "1000", 
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "",
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Rahul ",
        "email": "Rahul@example.com",
        "contact": "6398731034"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
 };

  rzp1: any;

  pay() {
    this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }

}
