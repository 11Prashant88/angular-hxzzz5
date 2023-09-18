import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: `./app.component.html`,
  styles: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular';
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  ngOnInit() {
    setTimeout(() => {
      this.count.set(1);
    }, 3000);
  }
}
