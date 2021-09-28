import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public components$: Observable<Componente[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.components$ = this.dataService.getMenuOptions();
  }

  public showMenu() {
    this.menuController.open('first');
  }
}
