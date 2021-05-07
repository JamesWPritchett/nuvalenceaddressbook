import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PhonebookentriesService } from '../phonebookentries.service';

import { PhonebookentrydetailsComponent } from './phonebookentrydetails.component';

describe('PhonebookentrydetailsComponent', () => {
  let component: PhonebookentrydetailsComponent;
  let fixture: ComponentFixture<PhonebookentrydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookentrydetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule, 
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        NoopAnimationsModule
      ],
      providers: [PhonebookentriesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookentrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
