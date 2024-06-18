import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { APIService } from 'src/shared/api.service';
import { API } from 'src/shared/interface/api';
import { ProductsService } from 'src/shared/products.service';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ProductsService],
})
export class ParentComponent implements OnInit, OnChanges {
  dataList: API[] = [];
  constructor(private _APIservice: APIService) {}
  ngOnInit(): void {
    this.getData();
  }
  ay7aga: string = 'ay7aga';

  @Input() ay7agaa: string = '';

  sayHi(message: string) {
    console.log('message: ', message);
  }
  getData() {
    this._APIservice.getData().subscribe({
      next: (res) => (this.dataList = res),
      error: (err) => console.log(err),
      complete: () => console.log('done yabn waldi'),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ch');
  }
}
