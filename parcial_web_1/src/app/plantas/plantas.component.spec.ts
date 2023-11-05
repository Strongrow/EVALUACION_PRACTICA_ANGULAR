import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantasComponent } from './plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../layout/header/header.component';
import { faker } from '@faker-js/faker';
import { Plantas } from './plantas';
import { PlantasService } from './plantas.service';

describe('PlantasComponent', () => {
    let component: PlantasComponent;
    let fixture: ComponentFixture<PlantasComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [PlantasComponent],
            providers: [PlantasService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlantasComponent);
        component = fixture.componentInstance;
        let plantas: Plantas;

        for (let i = 0; i < 3; i++) {
            plantas = new Plantas(
                faker.number.int(),
                faker.lorem.sentence(),
                faker.lorem.sentence(),
                faker.lorem.sentence(),
                faker.datatype.number(),
                faker.lorem.sentence(),
                faker.lorem.sentence(),
            );
            component.plantas.push(plantas);
        }
        fixture.detectChanges();
    });

    it('Deberá crearse', () => {
        expect(component).toBeTruthy();
    });

    it('Deberia tener 3 lista de plantas  ', () => {
        const element = fixture.debugElement.queryAll(By.css('tr.table-plants'));
        expect(element.length).toEqual(3)
    });
});


