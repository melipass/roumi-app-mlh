import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomieFinderComponent } from './roomie-finder.component';

describe('RoomieFinderComponent', () => {
  let component: RoomieFinderComponent;
  let fixture: ComponentFixture<RoomieFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomieFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomieFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
