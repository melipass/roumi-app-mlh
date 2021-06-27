import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingsService {

  private postingsAc: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  getPostings(): Observable<Post[]> {
    return this.postingsAc.asObservable();
  }

  setPostings(posts: Post[]): void {
    this.postingsAc.next(posts);
  }

  loadPostings() {
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }

  loadPostingsFromCity(city: string){
    return this.http.get<Post[]>('http://localhost:3000/posts?city=' + city)
  }

  loadPostingsFromCountry(country: string){
    return this.http.get<Post[]>('http://localhost:3000/posts?country=' + country)
  }

  loadPostingsFromUser(userid: number){
    return this.http.get<Post[]>('http://localhost:3000/posts?userid=' + userid)
  }


  addPosting(post: Post){
    return this.http.post<Post>('http://localhost:3000/posts', post)
  }


}
