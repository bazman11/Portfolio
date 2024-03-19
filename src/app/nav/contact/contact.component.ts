import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(/* private http: HttpClient,  */private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Contact');
  }

  /* submitForm(contactForm: NgForm) {
    if (contactForm.invalid) {
      // Form validation failed
      return;
    }

    const formData = {
      firstName: contactForm.value.firstName,
      lastName: contactForm.value.lastName,
      email: contactForm.value.email,
      timezone: contactForm.value.timezone,
      message: contactForm.value.message
    };

    this.sendEmail(formData);
  } */

  /* sendEmail(formData: any) {
    const apiKey = 'YOUR_SENDGRID_API_KEY';
    const url = 'https://api.sendgrid.com/v3/mail/send';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    const message = {
      personalizations: [
        {
          to: [{ email: 'recipient@example.com' }] // Replace with recipient's email address
        }
      ],
      from: { email: 'sender@example.com' }, // Replace with sender's email address
      subject: 'New Contact Form Submission',
      content: [
        {
          type: 'text/plain',
          value: `
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Email: ${formData.email}
            Timezone: ${formData.timezone}
            Message: ${formData.message}
          `
        }
      ]
    };

    this.http.post(url, message, { headers })
      .subscribe(
        (response) => {
          console.log('Email sent:', response);
          // Handle success, show a success message to the user if needed
        },
        (error) => {
          console.error('Error sending email:', error);
          // Handle error, show an error message to the user if needed
        }
      );
  } */


}
