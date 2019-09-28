import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { MapperService } from '../mapperService/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private networkService: NetworkService,
    private mappersService: MapperService
  ) { }

  public getUser(username) {
    return this.networkService
      .get(username)
      .then(data => {
        const User = this.mappersService._mapJsonToUser(data);
        return Promise.resolve(User);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
