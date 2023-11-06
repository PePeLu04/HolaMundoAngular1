import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      b works!
    </p>
  `,
  styles: [
  ]
})
export class BComponent {
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void{
    let info = this.route.snapshot.paramMap;
    console.log(info);
  }
}
