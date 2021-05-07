import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PhonebookentriesService } from '../phonebookentries.service';

@Component({
  selector: 'app-phonebookentrydetails',
  templateUrl: './phonebookentrydetails.component.html',
  styleUrls: ['./phonebookentrydetails.component.scss']
})
export class PhonebookentrydetailsComponent implements OnInit {

  public phoneBookEntry$: Observable<any> = of(null);
  public username: string | undefined = "";

  constructor(private phonebookentriesService: PhonebookentriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //load the matching entry from PhonebookentriesService using the username param as key
    this.phoneBookEntry$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.username = params.get('username')?.toString();
        return this.phonebookentriesService.entryByUsername(this.username);
      })
    );
  }

}
