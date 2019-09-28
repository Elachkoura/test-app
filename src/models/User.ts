export class User {
  private _login: string = null;
  private _id: number = null;
  private _node_id: string = null;
  private _avatar_url: string = null;
  private _gravatar_id: string = null;
  private _url: string = null;
  private _html_url: string = null;
  private _followers_url: string = null;
  private _following_url: string = null;
  private _gists_url: string = null;
  private _starred_url: string = null;
  private _subscriptions_url: string = null;
  private _organizations_url: string = null;
  private _repos_url: string = null;
  private _events_url: string = null;
  private _received_events_url: string = null;
  private _type: string = null;
  private _site_admin: string = null;
  private _name: string = null;
  private _company: string = null;
  private _blog: string = null;
  private _location: string = null;
  private _email: string = null;
  private _hireable: boolean = null;
  private _bio: string = null;
  private _public_repos: number = null;
  private _public_gists: number = null;
  private _followers: number = null;
  private _following: number = null;
  private _created_at: string = null;
  private _updated_at: string = null;

    /**
     * Getter login
     * @return {string }
     */
	public get login(): string  {
		return this._login;
	}

    /**
     * Getter id
     * @return {number }
     */
	public get id(): number  {
		return this._id;
	}

    /**
     * Getter node_id
     * @return {string }
     */
	public get node_id(): string  {
		return this._node_id;
  }

  /**
     * Getter avatar_url
     * @return {string }
     */
	public get avatar_url(): string  {
		return this._avatar_url;
	}

    /**
     * Getter gravatar_id
     * @return {string }
     */
	public get gravatar_id(): string  {
		return this._gravatar_id;
	}

    /**
     * Getter url
     * @return {string }
     */
	public get url(): string  {
		return this._url;
	}

    /**
     * Getter html_url
     * @return {string }
     */
	public get html_url(): string  {
		return this._html_url;
	}

    /**
     * Getter followers_url
     * @return {string }
     */
	public get followers_url(): string  {
		return this._followers_url;
	}

    /**
     * Getter following_url
     * @return {string }
     */
	public get following_url(): string  {
		return this._following_url;
	}

    /**
     * Getter gists_url
     * @return {string }
     */
	public get gists_url(): string  {
		return this._gists_url;
	}

    /**
     * Getter starred_url
     * @return {string }
     */
	public get starred_url(): string  {
		return this._starred_url;
	}

    /**
     * Getter subscriptions_url
     * @return {string }
     */
	public get subscriptions_url(): string  {
		return this._subscriptions_url;
	}

    /**
     * Getter organizations_url
     * @return {string }
     */
	public get organizations_url(): string  {
		return this._organizations_url;
	}

    /**
     * Getter repos_url
     * @return {string }
     */
	public get repos_url(): string  {
		return this._repos_url;
	}

    /**
     * Getter events_url
     * @return {string }
     */
	public get events_url(): string  {
		return this._events_url;
	}

    /**
     * Getter received_events_url
     * @return {string }
     */
	public get received_events_url(): string  {
		return this._received_events_url;
	}

    /**
     * Getter type
     * @return {string }
     */
	public get type(): string  {
		return this._type;
	}

    /**
     * Getter site_admin
     * @return {string }
     */
	public get site_admin(): string  {
		return this._site_admin;
	}

    /**
     * Getter name
     * @return {string }
     */
	public get name(): string  {
		return this._name;
	}

    /**
     * Getter company
     * @return {string }
     */
	public get company(): string  {
		return this._company;
	}

    /**
     * Getter blog
     * @return {string }
     */
	public get blog(): string  {
		return this._blog;
	}

    /**
     * Getter location
     * @return {string }
     */
	public get location(): string  {
		return this._location;
	}

    /**
     * Getter email
     * @return {string }
     */
	public get email(): string  {
		return this._email;
	}

    /**
     * Getter hireable
     * @return {boolean }
     */
	public get hireable(): boolean  {
		return this._hireable;
	}

    /**
     * Getter bio
     * @return {string }
     */
	public get bio(): string  {
		return this._bio;
	}

    /**
     * Getter public_repos
     * @return {number }
     */
	public get public_repos(): number  {
		return this._public_repos;
	}

    /**
     * Getter public_gists
     * @return {number }
     */
	public get public_gists(): number  {
		return this._public_gists;
	}

    /**
     * Getter followers
     * @return {number }
     */
	public get followers(): number  {
		return this._followers;
	}

    /**
     * Getter following
     * @return {number }
     */
	public get following(): number  {
		return this._following;
	}

    /**
     * Getter created_at
     * @return {string }
     */
	public get created_at(): string  {
		return this._created_at;
	}

    /**
     * Getter updated_at
     * @return {string }
     */
	public get updated_at(): string  {
		return this._updated_at;
	}

    /**
     * Setter login
     * @param {string } value
     */
	public set login(value: string ) {
		this._login = value;
	}

    /**
     * Setter id
     * @param {number } value
     */
	public set id(value: number ) {
		this._id = value;
	}

    /**
     * Setter node_id
     * @param {string } value
     */
	public set node_id(value: string ) {
		this._node_id = value;
  }

  /**
     * Setter avatar_url
     * @param {string } value
     */
	public set avatar_url(value: string ) {
		this._avatar_url = value;
	}

    /**
     * Setter gravatar_id
     * @param {string } value
     */
	public set gravatar_id(value: string ) {
		this._gravatar_id = value;
	}

    /**
     * Setter url
     * @param {string } value
     */
	public set url(value: string ) {
		this._url = value;
	}

    /**
     * Setter html_url
     * @param {string } value
     */
	public set html_url(value: string ) {
		this._html_url = value;
	}

    /**
     * Setter followers_url
     * @param {string } value
     */
	public set followers_url(value: string ) {
		this._followers_url = value;
	}

    /**
     * Setter following_url
     * @param {string } value
     */
	public set following_url(value: string ) {
		this._following_url = value;
	}

    /**
     * Setter gists_url
     * @param {string } value
     */
	public set gists_url(value: string ) {
		this._gists_url = value;
	}

    /**
     * Setter starred_url
     * @param {string } value
     */
	public set starred_url(value: string ) {
		this._starred_url = value;
	}

    /**
     * Setter subscriptions_url
     * @param {string } value
     */
	public set subscriptions_url(value: string ) {
		this._subscriptions_url = value;
	}

    /**
     * Setter organizations_url
     * @param {string } value
     */
	public set organizations_url(value: string ) {
		this._organizations_url = value;
	}

    /**
     * Setter repos_url
     * @param {string } value
     */
	public set repos_url(value: string ) {
		this._repos_url = value;
	}

    /**
     * Setter events_url
     * @param {string } value
     */
	public set events_url(value: string ) {
		this._events_url = value;
	}

    /**
     * Setter received_events_url
     * @param {string } value
     */
	public set received_events_url(value: string ) {
		this._received_events_url = value;
	}

    /**
     * Setter type
     * @param {string } value
     */
	public set type(value: string ) {
		this._type = value;
	}

    /**
     * Setter site_admin
     * @param {string } value
     */
	public set site_admin(value: string ) {
		this._site_admin = value;
	}

    /**
     * Setter name
     * @param {string } value
     */
	public set name(value: string ) {
		this._name = value;
	}

    /**
     * Setter company
     * @param {string } value
     */
	public set company(value: string ) {
		this._company = value;
	}

    /**
     * Setter blog
     * @param {string } value
     */
	public set blog(value: string ) {
		this._blog = value;
	}

    /**
     * Setter location
     * @param {string } value
     */
	public set location(value: string ) {
		this._location = value;
	}

    /**
     * Setter email
     * @param {string } value
     */
	public set email(value: string ) {
		this._email = value;
	}

    /**
     * Setter hireable
     * @param {boolean } value
     */
	public set hireable(value: boolean ) {
		this._hireable = value;
	}

    /**
     * Setter bio
     * @param {string } value
     */
	public set bio(value: string ) {
		this._bio = value;
	}

    /**
     * Setter public_repos
     * @param {number } value
     */
	public set public_repos(value: number ) {
		this._public_repos = value;
	}

    /**
     * Setter public_gists
     * @param {number } value
     */
	public set public_gists(value: number ) {
		this._public_gists = value;
	}

    /**
     * Setter followers
     * @param {number } value
     */
	public set followers(value: number ) {
		this._followers = value;
	}

    /**
     * Setter following
     * @param {number } value
     */
	public set following(value: number ) {
		this._following = value;
	}

    /**
     * Setter created_at
     * @param {string } value
     */
	public set created_at(value: string ) {
		this._created_at = value;
	}

    /**
     * Setter updated_at
     * @param {string } value
     */
	public set updated_at(value: string ) {
		this._updated_at = value;
	}


}
