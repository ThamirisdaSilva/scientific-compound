import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundsList } from './compounds-list';

describe('CompoundsList', () => {
  let component: CompoundsList;
  let fixture: ComponentFixture<CompoundsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
