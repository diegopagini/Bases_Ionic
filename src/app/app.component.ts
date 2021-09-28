import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public options$: Observable<Componente[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.options$ = this.dataService.getMenuOptions();
  }
}
