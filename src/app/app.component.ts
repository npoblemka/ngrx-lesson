import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store} from '@ngrx/store';
import { clear, countSelector, decrease, increase } from './reducers/counter';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private store = inject (Store)

  updatedAt?: number;
  count$: Observable<number> = this.store.select(countSelector);
  

  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))


  increase(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(increase())
  }
  decrease(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease())
  }
  clear(): void {
    this.updatedAt = Date.now();
   this.store.dispatch(clear())
  }
}
