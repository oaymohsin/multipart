import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipartformdataComponent } from './multipartformdata.component';

describe('MultipartformdataComponent', () => {
  let component: MultipartformdataComponent;
  let fixture: ComponentFixture<MultipartformdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipartformdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipartformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
