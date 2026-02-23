import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundDetail } from './compound-detail';

describe('CompoundDetail', () => {
  let component: CompoundDetail;
  let fixture: ComponentFixture<CompoundDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
