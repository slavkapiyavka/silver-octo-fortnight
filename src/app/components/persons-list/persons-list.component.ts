import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe((data) => (this.data = data));
  }
}
