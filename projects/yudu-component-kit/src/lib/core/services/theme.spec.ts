import { TestBed } from '@angular/core/testing';

import { Theme } from './theme';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Theme', () => {
  let service: Theme;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()]
    });
    service = TestBed.inject(Theme);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
