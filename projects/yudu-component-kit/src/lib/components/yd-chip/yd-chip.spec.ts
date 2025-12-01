import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YdChip } from './yd-chip';
describe('YdChip', () => {
  let fixture: ComponentFixture<YdChip>;
  let compiled:HTMLElement;
  let component: YdChip;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdChip, 
         RouterModule.forRoot([{path: '', component: YdChip}]
      )
      ],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(YdChip);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('label', 'test-1');
    fixture.componentRef.setInput('route', './test');

    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
