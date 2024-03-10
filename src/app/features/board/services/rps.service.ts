import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RpsService {
  constructor(private http: HttpClient) {}

  public getAllObjects() {
    return this.http.get(
      'https://rps101.pythonanywhere.com/api/v1/objects/all'
    );
  }

  public getMatchResult(challenger: string, defender: string) {
    return this.http.get(
      `https://rps101.pythonanywhere.com/api/v1/match?object_one=${challenger}&object_two=${defender}`
    );
  }
}
