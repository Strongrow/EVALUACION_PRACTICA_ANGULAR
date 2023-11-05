import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PlantasComponent } from './app/plantas/plantas.component';
import { PlantasService } from './app/plantas/plantas.service';
import { of } from 'rxjs';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let plantasService: jasmine.SpyObj<PlantasService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlantasService', ['getPlantas']);

    await TestBed.configureTestingModule({
      declarations: [PlantasComponent],
      providers: [{ provide: PlantasService, useValue: spy }]
    }).compileComponents();

    plantasService = TestBed.inject(PlantasService) as jasmine.SpyObj<PlantasService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
  });

  it('should create table with three rows', () => {
    const mockPlantas = [
      { id: 1, nombre_comun: 'Planta1', tipo: 'Interior', clima: 'Templado' },
      { id: 2, nombre_comun: 'Planta2', tipo: 'Exterior', clima: 'Cálido' },
      { id: 3, nombre_comun: 'Planta3', tipo: 'Interior', clima: 'Húmedo' }
    ];

    plantasService.getPlantas.and.returnValue(of(mockPlantas));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');

    expect(rows.length).toBe(3);
  });
});