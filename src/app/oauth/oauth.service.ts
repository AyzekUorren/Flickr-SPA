import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OauthService {
  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get('http://localhost:8010/OAuth/userInfo');
  }
  getOauthUrl() {
    return this.http.get('http://localhost:8010/OAuth/request');
  }
  getPhotoSets() {
    return this.http.get('http://localhost:8010/User/PhotoSets');
  }
}
