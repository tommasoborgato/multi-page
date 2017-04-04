import { TestBed } from '@angular/core/testing';

import { AppComponent2 } from './app2.component';

describe('App2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent2]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent2);
    expect(fixture.componentInstance instanceof AppComponent2).toBe(true, 'should create AppComponent2');
  });
});
