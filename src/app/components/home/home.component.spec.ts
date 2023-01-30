import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: DataService
  let httpClientSpy: { get: jasmine.Spy}

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new DataService(httpClientSpy as any)
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the array', () => {
    let a = component.selectedCities.length
    component.onSelect()
    let b = component.selectedCities.length
    expect(b).toBeGreaterThan(a);
  });

});
