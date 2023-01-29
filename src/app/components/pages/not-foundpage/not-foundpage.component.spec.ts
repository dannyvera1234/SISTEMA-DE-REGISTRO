import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFOUNDpageComponent } from './not-foundpage.component';

describe('NotFOUNDpageComponent', () => {
  let component: NotFOUNDpageComponent;
  let fixture: ComponentFixture<NotFOUNDpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFOUNDpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFOUNDpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
