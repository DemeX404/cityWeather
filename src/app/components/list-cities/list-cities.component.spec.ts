import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GooglemapComponent } from '../googlemap/googlemap.component';

import { ListCitiesComponent } from './list-cities.component';

describe('ListCitiesComponent', () => {
  let component: ListCitiesComponent;
  let fixture: ComponentFixture<ListCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ GooglemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
