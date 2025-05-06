import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartelisteComponent } from './warteliste.component';

describe('WartelisteComponent', () => {
  let component: WartelisteComponent;
  let fixture: ComponentFixture<WartelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WartelisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WartelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
