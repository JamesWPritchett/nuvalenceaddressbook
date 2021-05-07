import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhonebookentriesService } from '../phonebookentries.service';

@Component({
  selector: 'app-phonebookentrieslist',
  templateUrl: './phonebookentrieslist.component.html',
  styleUrls: ['./phonebookentrieslist.component.scss']
})
export class PhonebookentriesListComponent {

  constructor(public phonebookentriesService: PhonebookentriesService) { }

}
