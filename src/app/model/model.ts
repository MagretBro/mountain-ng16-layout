
export class Mountain {
  id: number = 9;
  name: string="";
  sectors: Sector[]=[];
  imageUrl?: string;
}

export  class Sector {
  id: number = 19;
  idMountaine: number = 13;
  name: string="";
  routes: Route[]=[];
}


export class Route {
  id?: number;
  name?: string="";
  category?: string="";
  equipment?: number;
}

export class MountainNameResultModel {
  id: number = 119;
  name?: string="";
  imageUrl?: string; // Добавляем свойство для хранения пути к изображению
}
