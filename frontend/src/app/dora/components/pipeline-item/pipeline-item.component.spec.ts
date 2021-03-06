import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineItemComponent } from './pipeline-item.component';

describe('PipelineItemComponent', () => {
  let component: PipelineItemComponent;
  let fixture: ComponentFixture<PipelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
