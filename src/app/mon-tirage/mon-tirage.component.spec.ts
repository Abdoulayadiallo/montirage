import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTirageComponent } from './mon-tirage.component';

describe('MonTirageComponent', () => {
  let component: MonTirageComponent;
  let fixture: ComponentFixture<MonTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
