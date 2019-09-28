import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Network Layer.
 *
 * `NetworkService` is available as an injectable class, with methods to perform HTTP requests.
 */
export class NetworkService {
  baseUrl = environment.base;

  constructor(private http: HttpClient, private injector: Injector) {}

  /**
   * GET request api = apiary url
   */

  public get(url?: string) {
    return this.http.get(this.baseUrl + url).toPromise();
  }
}

/**
 * Define the available options for each network request.
 */
export interface NetworkServiceOptions {
  /**
   * Define whether the request is sent to the API (`false`, default) or to a remote,
   * external server (`true`).
   */
  distant?: boolean;

  /**
   * Define whether the request requires an access token (`false`, default) or **must** be
   * requested anonymously (`true`).
   */
  noAuthentication?: boolean;

  /**
   * Define whether the request is intended to return a plain response (`true`) or not (`false`, default).
   * In this latter case, the `application/json` Accept and Content-Type headers will be set.
   */
  plain?: boolean;
}
