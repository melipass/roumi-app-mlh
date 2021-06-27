import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostingsService } from 'src/app/services/postings.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.less']
})

export class PostingsComponent implements OnInit {

/*  @Input() postings: Post[] = [];*/

  id: number = 0;
  userid: number = 0;
  city: string = '';
  country: string = 'Any';
  area: string = '';
  budget: number = 0;
  allergies: string[] = [];
  needs: string[] = [];
  likes: string[] = [];
  allies: boolean = false;
  alreadyrenting: boolean = false;
  maxroomies: number = 0;
  petfriendly: boolean = false;
  kidsfriendly: boolean = false;
  postings: Post[] = [];
  postingsShown: Post[] = [];

  constructor(private services: PostingsService) { }

  ngOnInit(): void { 

    this.loadPostings();  }

  loadPostings() { 
    this.postingsShown = [];
    this.services.loadPostings().subscribe(PostingsService => {
    this.postings = PostingsService;
    })
    if (this.country != "Any"){ 
      for (const a of this.postings) {
        if (this.city != ""){
          if ((a.country == this.country) && (a.city == this.city)) this.postingsShown.push(a);
        }
        else { if (a.country == this.country) this.postingsShown.push(a);
        }
      }
     } else { this.postingsShown = this.postings; }
  ; }

  async loadPostingsAsc() { this.postings = await this.services.loadPostings().toPromise(); }


  setCountry(){
    this.city = (<HTMLInputElement>document.getElementById('city-input')).value;
    console.log(this.city);
    this.country = (<HTMLSelectElement>document.getElementById('country-select')).value;
    console.log(this.country);
    this.loadPostings();
  }
}
