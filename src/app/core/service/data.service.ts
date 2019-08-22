import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BASE_URL} from "../../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class DataService {
  private headers: HttpHeaders;
  private authorization: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * 获取数据
   * @param uri
   * @param params
   */
  getData(uri, params?): Observable<any> {
    this.setHead();
    return this.http.get(BASE_URL + uri, {headers: this.headers, params: params});
  }

  /**
   * post 发送数据
   * @param uri
   * @param params
   */
  postData(uri, params?): Observable<any> {
    return this.http.post(BASE_URL + uri, params);
  }

  /**
   * 设置头部信息
   */
  private setHead() {
    if (this.authorization) {
      return;
    }
    this.authorization = this.getStore('authorization');
    if (!this.authorization) {
      return;
    }
    this.headers = new HttpHeaders().set('authorization', 'Bearer:' + this.authorization);
  }

  /**
   * 获取缓存数据
   * @param name
   */
  getStore(name: string) {
    if (!name) {
      return;
    }
    return localStorage.getItem(name);
  }

  /**
   * 设置缓存数据
   * @param name
   * @param content
   */
  setStore(name: string, content: any) {
    if (!name) {
      return;
    }
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    localStorage.setItem(name, content);
  }

  /**
   * 移除缓存数据
   * @param name
   */
  removeStore(name: string) {
    if (!name) {
      return;
    }
    localStorage.removeItem(name);
  }
}

