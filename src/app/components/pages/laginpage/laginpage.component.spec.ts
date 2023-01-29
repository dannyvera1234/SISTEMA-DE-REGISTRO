import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaginpageComponent } from './laginpage.component';

describe('LaginpageComponent', () => {
  let component: LaginpageComponent;
  let fixture: ComponentFixture<LaginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
