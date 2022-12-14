import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgpageComponent } from './imgpage.component';

describe('ImgpageComponent', () => {
  let component: ImgpageComponent;
  let fixture: ComponentFixture<ImgpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
