import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhonebookentriesService {

  private entries$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    //load up 20 entries and save in BehaviorSubject. Filter out bad results and take only the first response (unit tests trigger multiple calls)
    this.http.get("https://randomuser.me/api/?results=20").pipe(filter((r: any) => r && r.results && r.results.length > 0), map((r) => r.results), first()).subscribe((r) => this.entries$.next(r));
  }

  /**
 * @return {Observable} return observable stream from BehaviorSubject 
 */
  public get entries(): Observable<any[]> {
    return this.entries$.asObservable();
  }

  /**
 * @param {string | undefined}  username - username used for search.
 * @return {any} Entry from randomuser.me or undefined/null if invalid. 
 */
  public entryByUsername(username: string | undefined): any {
    if (username === undefined) {
      return of(null);
    }
    return this.entries.pipe((map((entries: any[]) => entries.find((e: any) => e.login.username === username))));
  }
}
