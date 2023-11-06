import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p (click)='inicio()'>
      error404 works!
    </p>
  `,
  styles: [
  ]
})
export class Error404Component {
  constructor(private router:Router){}
  inicio(){
    this.router.navigate(['/'])
  }
}
