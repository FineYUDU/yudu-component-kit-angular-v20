import { TestBed } from '@angular/core/testing';

import { LocalStorageStore } from './local-storage-store';

describe('LocalStorageStore', () => {
  let service: LocalStorageStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
