import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardComponent } from './maincard.component';

describe('MaincardComponent', () => {
  let component: MaincardComponent;
  let fixture: ComponentFixture<MaincardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
