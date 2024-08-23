import { Injectable } from '@angular/core';
import {Mountain, MountainNameResultModel, Route, Sector} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // реализация класса с присвоением имени переменной sectorExample
  private sectorExample: Sector = {
    id: 70,
    idMountaine: 11,
    name: "FirstFantasy",
    routes: [
    { id: 0, name: "Hotter", category: "6c+", equipment: 12 },
    { id: 1, name: "Black&Light", category: "6b", equipment: 10 },
    { id: 2, name: "Segal", category: "8a", equipment: 14 },
    { id: 3, name: "Liana", category: "5c+", equipment: 13 },
    { id: 4, name: "Orange", category: "6a", equipment: 12 },
    { id: 5, name: "Plot", category: "5a", equipment: 11 },
  ]
  };

  private sectorExample2: Sector = {
    id: 71,
    idMountaine: 11,
    name: "SecondFantasy",
    routes: [
      { id: 7, name: "Null", category: "5c+", equipment: 10 },
      { id: 8, name: "Plus", category: "5b", equipment: 9 },
    ]
  };

  private sectorSecondExample: Sector = {
    id: 90,
    idMountaine: 13,
    name: "SecondSector",
    routes: [
      { id: 20, name: "Puh", category: "5c+", equipment: 12 },
      { id: 21, name: "Sweet", category: "6b+", equipment: 10 },
      { id: 22, name: "MoralQuestions", category: "8a", equipment: 14 },
      { id: 23, name: "Plyaad", category: "7c+", equipment: 13 },
      { id: 24, name: "Dirty", category: "6a", equipment: 12 },
      { id: 25, name: "Coleya", category: "5c", equipment: 11 },
    ]
  };

  private mountainFantasy: Mountain = {
    id: 11,
    name: "The Mountain Fantasy",
    sectors: [this.sectorExample, this.sectorExample2],
    imageUrl: "/assets/route.jpg" // Пример пути к изображению

  }

  private mountainFantasy2: Mountain = {
    id: 13,
    name: "The Mountain Fantasy2",
    sectors: [this.sectorSecondExample],
    imageUrl: "/assets/route.jpg" // Пример пути к изображению

  }

  mountainNameList(): MountainNameResultModel[] {
    return [ this.mountainFantasy, this.mountainFantasy2 ]
  }

  mountainInfo(id: number): Mountain {
    const mountains = [this.mountainFantasy, this.mountainFantasy2];
    return mountains.find(mountain => mountain.id === id) || new Mountain();
  }
}


