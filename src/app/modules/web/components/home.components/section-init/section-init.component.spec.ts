import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInitComponent } from './section-init.component';

describe('SectionInitComponent', () => {
  let component: SectionInitComponent;
  let fixture: ComponentFixture<SectionInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
