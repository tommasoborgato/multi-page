import { TestBed } from '@angular/core/testing';

import { SharedComponent } from './shared.component';

describe('SharedComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SharedComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(SharedComponent);
    expect(fixture.componentInstance instanceof SharedComponent).toBe(true, 'should create SharedComponent');
  });
});
