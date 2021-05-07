import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhonebookentriesService } from '../phonebookentries.service';
import { MatListModule } from '@angular/material/list';
import { PhonebookentriesListComponent } from './phonebookentrieslist.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatNavListHarness, MatNavListItemHarness } from '@angular/material/list/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PhonebookentriesComponent', () => {
  let component: PhonebookentriesListComponent;
  let fixture: ComponentFixture<PhonebookentriesListComponent>;
  let loader: HarnessLoader;
  let defaultTimeout: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonebookentriesListComponent],
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
    }).compileComponents();
    fixture = TestBed.createComponent(PhonebookentriesListComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //increase timeout just for the UI because it's loading external; resources
    defaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = defaultTimeout;
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of 20 items', async() => {

    const navList = await loader.getHarness(MatNavListHarness);

    expect(await (await navList.getItems()).length).toBe(20);

  });

  it('should have avatars', async() => {

    const navList = await loader.getHarness(MatNavListHarness);
    const firstlistItem: MatNavListItemHarness = (await navList.getItems())[0];

    expect(await firstlistItem.hasAvatar()).toBeTruthy();

  });

});
