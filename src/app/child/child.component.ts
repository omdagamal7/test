import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from 'src/shared/products.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() ay7aga: string = '';
  @Output() emit: EventEmitter<string> = new EventEmitter();
  sayHi() {
    this.emit.emit('done');
    console.log(this.ay7aga);
  }
  ngOnInit(): void {
    console.log('in');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ch', changes);
  }
}
