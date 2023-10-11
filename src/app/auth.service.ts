import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = 'coinranking9c6131007cfd9f2063260c1715482312131a1f2617b7b634';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.coinranking.com/v2/coins';
   constructor(private http: HttpClient) {}

  cryptoData() {
    const url = `${this.baseUrl}`

    return this.http.get(url).toPromise().then((data)=> {
      return data;
    })
  }
}
