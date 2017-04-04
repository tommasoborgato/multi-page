import { TestBed } from '@angular/core/testing';

import { AppComponent1 } from './app1.component';

describe('App1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent1]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent1);
    expect(fixture.componentInstance instanceof AppComponent1).toBe(true, 'should create AppComponent1');
  });
});
