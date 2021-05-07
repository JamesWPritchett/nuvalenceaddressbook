import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PhonebookentriesService } from './phonebookentries.service';

xdescribe('PhonebookentriesService', () => {
  let service: PhonebookentriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PhonebookentriesService]
    });
    service = TestBed.inject(PhonebookentriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 20 entries', async () => {

    const entries: any[] = await service.entries.toPromise();

    expect(entries.length).toEqual(20);
  });

  it('should return the same 20 entries each time', async () => {

    const entries1: any[] = await service.entries.toPromise();
    const entries2: any[] = await service.entries.toPromise();

    expect(entries1[0].login.uuid).toEqual(entries2[0].login.uuid);
    expect(entries1[0].login.username).toEqual(entries2[0].login.username);
    expect(entries1[0].email).toEqual(entries2[0].email);
  })
});
