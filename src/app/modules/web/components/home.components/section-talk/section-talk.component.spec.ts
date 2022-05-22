import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTalkComponent } from './section-talk.component';

describe('SectionTalkComponent', () => {
  let component: SectionTalkComponent;
  let fixture: ComponentFixture<SectionTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
