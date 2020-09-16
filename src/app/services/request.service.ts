import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  async getUser(username) {
    let response: any = await this.httpClient.get(`${environment.api_url}/users/${username}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }
}
