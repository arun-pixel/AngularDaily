import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataServService {

  count = 5;

  player = ['arun','marshall','dude','shot'];

  details = {
    name: 'arun',
    id : 22,
    tag : 'marshall'
  }

  constructor() {
    
   }

}
