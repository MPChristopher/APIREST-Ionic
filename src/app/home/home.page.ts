import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private api: PokeapiService,  private db:Firestore) {}
  ledstate:any;
  
  data_pokemon:any ;
  value = ""

  getPokemonData2(value: string) {
  try {

    this.api.getPokemon(value).subscribe((response => {
      this.data_pokemon = response;
      console.log(this.data_pokemon)
    }));

    } catch (error) {
      console.log(error);
    }
  }
  async apagar() {
    this.ledstate = doc(this.db,'tipo','fuego');//RUTA DE TABLA EN LA BD
    await setDoc(this.ledstate, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
}

} 