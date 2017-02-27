import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';
import { Artists } from '../../../Artists';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:string;
  artist:Artists[];
  albums:Album[];


  constructor(
    private route:Router,
    private spocify:SpotifyService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.map(params=>params['id']).subscribe((id)=>{
      this.spocify.getArtist(id).subscribe(artist=>{
        this.artist = artist;
        //console.log(this.artist)
      })

      this.spocify.getAlbums(id).subscribe(albums=>{
        this.albums = albums.items;
        console.log(this.albums)
      })

    })

  }

}
