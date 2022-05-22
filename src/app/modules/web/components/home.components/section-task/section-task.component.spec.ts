import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTaskComponent } from './section-task.component';

describe('SectionTaskComponent', () => {
  let component: SectionTaskComponent;
  let fixture: ComponentFixture<SectionTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
