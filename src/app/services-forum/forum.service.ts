import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Forum } from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private forums: Forum[] = [
    { id: 'main', name: 'Foro Principal', type: 'main', order: 0 },
    { id: 'sub1', name: 'Subforo #1', type: 'sub', order: 1 },
    { id: 'sub2', name: 'Subforo #2', type: 'sub', order: 2 },
    { id: 'sub3', name: 'Subforo #3', type: 'sub', order: 3 }
  ];

  getForums(): Observable<Forum[]> {
    return of(this.forums);
  }

  getMainForum(): Observable<Forum> {
    return of(this.forums.find(forum => forum.type === 'main')!);
  }

  getSubForums(): Observable<Forum[]> {
    return of(this.forums.filter(forum => forum.type === 'sub'));
  }
}
