import {Component, OnInit} from '@angular/core';
import {Sector, Route, MountainNameResultModel, Mountain} from "../../model/model";
import {CardService} from "../../service/card.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  mountainList: MountainNameResultModel[] = [];
  sectorList: Sector[] = [];
  mountainSectors = new Mountain();
  displayedColumns: string[] = ['id', 'name', 'category', 'equipment'];

  constructor(
    private cardService: CardService
  ) {
  }

  ngOnInit() {
    this.mountainList = this.cardService.mountainNameList()
  }

  onMountainClick(id: number) {
    this.mountainSectors = this.cardService.mountainInfo(id);
    this.sectorList = this.mountainSectors.sectors; // Обновляем список секторов
  }

}


