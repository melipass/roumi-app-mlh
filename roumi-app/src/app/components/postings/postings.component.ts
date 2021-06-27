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
  country: string = '';
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

  constructor(private services: PostingsService) { }

  ngOnInit(): void { this.loadPostings(); }

  loadPostings() { this.services.loadPostings().subscribe(PostingsService => {this.postings = PostingsService}); }

  async loadPostingsAsc() { this.postings = await this.services.loadPostings().toPromise(); }



  /*
  ngOnInit(): void {
    this.loadPostings();
    this.services.getPostings().subscribe(
      (postings: Post[]) => {
        console.log(postings);
        this.postings = postings;
      }
    );
  }

  loadPostings() {
    this.services.loadPostings().subscribe(PostingsService => {
      this.postings = PostingsService;
    });
  }

  async loadPostingsAsc() {
    this.postings = await this.services.loadPostings().toPromise();
  }
  */
}
