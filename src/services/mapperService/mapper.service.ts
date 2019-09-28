import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class MapperService {
  constructor() {}

  // User Mapper
  public _mapJsonToUsers(arrayOfUsers): Array<User> {
    return arrayOfUsers.map(data => this._mapJsonToUser(data));
  }

  public _mapJsonToUser(userJson): User {
    const user = new User();

    user.login = userJson['login'];
    user.id = userJson['id'];
    user.node_id = userJson['node_id'];
    user.avatar_url = userJson['avatar_url'];
    user.gravatar_id = userJson['gravatar_id'];
    user.url = userJson['url'];
    user.html_url = userJson['html_url'];
    user.followers_url = userJson['followers_url'];
    user.following_url = userJson['following_url'];
    user.gists_url = userJson['gists_url'];
    user.starred_url = userJson['starred_url'];
    user.subscriptions_url = userJson['subscriptions_url'];
    user.organizations_url = userJson['organizations_url'];
    user.repos_url = userJson['repos_url'];
    user.events_url = userJson['events_url'];
    user.received_events_url = userJson['received_events_url'];
    user.type = userJson['type'];
    user.site_admin = userJson['site_admin'];
    user.name = userJson['name'];
    user.blog = userJson['blog'];
    user.location = userJson['location'];
    user.email = userJson['email'];
    user.hireable = userJson['hireable'];
    user.bio = userJson['bio'];
    user.public_repos = userJson['public_repos'];
    user.public_gists = userJson['public_gists'];
    user.followers = userJson['followers'];
    user.following = userJson['following'];
    user.created_at = userJson['created_at'];
    user.updated_at = userJson['updated_at'];

    return user;
  }
}
