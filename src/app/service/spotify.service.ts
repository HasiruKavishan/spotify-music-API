import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl:string;
  private artistUrl:string;
  private albumtUrl:string;

  constructor(
    private http:Http

  ) { }

  searchres(str:String,type:'artist'){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get(this.searchUrl).map(res=>res.json());
  }

  getArtist(id:string){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.artistUrl).map(res=>res.json());
  }


  getAlbums(id:string){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.albumtUrl = 'https://api.spotify.com/v1/artists/'+id+'/albums';
    return this.http.get(this.albumtUrl).map(res=>res.json());
  }

}
