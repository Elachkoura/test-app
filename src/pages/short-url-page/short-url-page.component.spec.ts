import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlPageComponent } from './short-url-page.component';

describe('ShortUrlPageComponent', () => {
  let component: ShortUrlPageComponent;
  let fixture: ComponentFixture<ShortUrlPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
