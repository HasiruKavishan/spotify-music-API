import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { Artists } from '../../../Artists';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchRes: Artists[];
  constructor(
    private spotify:SpotifyService,
    private route:Router

  ) { }

  ngOnInit() {
  }

  searchResult(){

this.spotify.searchres(this.searchString,"artist").subscribe(res=>{

    this.searchRes = res.artists.items;

  })
  }


}
