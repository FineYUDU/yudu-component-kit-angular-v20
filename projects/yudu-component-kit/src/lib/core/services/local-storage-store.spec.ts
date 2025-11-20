import { TestBed } from '@angular/core/testing';

import { LocalStorageStore } from './local-storage-store';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LocalStorageStore', () => {
  let service: LocalStorageStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()]
    });
    service = TestBed.inject(LocalStorageStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
