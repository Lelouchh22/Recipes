import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiKey: string='PBpq6eYr6FqcpB40vtpe9pVnBB98iZjZ';
  private ricettaSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
  ricette$:Observable<any[]>=this.ricettaSubject.asObservable();
  constructor(private http:HttpClient) { }

  ricercaRicetta(query:string):void{
    const url=`https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`;
    const headers = new HttpHeaders().set('apiKey', this.apiKey);

    this.http.get(url,{headers}).subscribe((data:any)=>{
      this.ricettaSubject.next(data.results);
    })
  }
}
