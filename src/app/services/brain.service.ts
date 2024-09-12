import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrainModel } from '../models/brain-model';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

  constructor(private http:HttpClient) { }

  getBrains():Observable<BrainModel>{
    return this.http.get<BrainModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}


