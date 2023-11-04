import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantas } from './plantas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  private apiUrl = environment.baseUrl;

constructor(private http:HttpClient) { }

getPlantas(): Observable<Plantas[]>{
  console.log(this.apiUrl);
  return this.http.get<Plantas[]>(this.apiUrl);
}

}
