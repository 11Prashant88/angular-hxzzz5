import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./app.component.html`,
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