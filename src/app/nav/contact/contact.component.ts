import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Contact');
  }

  submitForm() {
    // Get form values
    const formData = {
      firstName: (document.getElementById('firstName') as HTMLInputElement).value,
      lastName: (document.getElementById('lastName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      timezone: (document.getElementById('timezone') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value
    };

    // Send email
    this.sendEmail(formData);
  }

  sendEmail(formData: any) {
    // Here you can implement your logic to send email
    // For example, using Angular HttpClient to make an HTTP request to a backend service
    console.log('Sending email:', formData);
  }
}
