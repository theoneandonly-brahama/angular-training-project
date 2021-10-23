import { Commentaire } from "./commentaire";

export class Pizza {
    

    constructor(public nom?:string, public image?:string, public prix?:number, public veg?:boolean, public comments?:Commentaire[]){

    }
}
