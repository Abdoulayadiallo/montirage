import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAfficherTirageComponent } from './page-afficher-tirage.component';

describe('PageAfficherTirageComponent', () => {
  let component: PageAfficherTirageComponent;
  let fixture: ComponentFixture<PageAfficherTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAfficherTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAfficherTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
