import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'psaikumar2810@gmail.com',
      link: 'mailto:psaikumar2810@gmail.com'
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Bhubaneswar, India',
      link: null
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 9668094690',
      link: 'tel:+919668094690'
    }
  ];

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sai2821' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/psaikumar' }
  ];

  async onSubmit(): Promise<void> {
    this.isSubmitting.set(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // Reset success message after 5 seconds
    setTimeout(() => {
      this.isSubmitted.set(false);
    }, 5000);
  }
}
