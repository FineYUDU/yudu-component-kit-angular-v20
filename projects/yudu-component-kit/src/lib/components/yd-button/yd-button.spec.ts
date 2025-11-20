import { ComponentFixture, TestBed } from "@angular/core/testing"
import { provideZonelessChangeDetection } from "@angular/core";

import { YdBtnSize, YdBtnStyle, YdButton } from "./yd-button";

describe('YdButton',()=> {
    let fixture: ComponentFixture<YdButton>;
    let compiled: HTMLElement;
    let component:YdButton;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[YdButton],
            providers:[provideZonelessChangeDetection()]
        }).compileComponents();

        fixture = TestBed.createComponent(YdButton);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement as HTMLElement;

        fixture.detectChanges();
    });

    it('should create the app', ()=> {
        expect(component).toBeTruthy();
    });

    it('should initialize inputs with default values', ()=> {
        expect(component.size()).toBe('normal');
        expect(component.buttonStyle()).toBe('primary');
        expect(component.type()).toBe('button');
        expect(component.disabled()).toBeFalse();
        expect(component.fullSize()).toBeFalse();
    });

    it('should apply host default classes', () => {
        expect(compiled.classList).toContain('yd-btn__container');
    });

    it('should initialize button with class yd-btn', ()=> {
        const button = compiled.querySelector('button') as HTMLButtonElement;

        expect(button).toBeTruthy();
        expect(button.classList).toContain('yd-btn');
    });

    it('should transform string inputs for disabled/fullSize', () => {
        fixture.componentRef.setInput('disabled','');
        fixture.componentRef.setInput('fullSize','');
        
        expect(component.disabled()).toBeTrue();
        expect(component.fullSize()).toBeTrue();
    });
    
    it('should keep boolean values for inputs disabled/fullSize', () => {
        fixture.componentRef.setInput('disabled',true);
        fixture.componentRef.setInput('fullSize',false);

        expect(component.disabled()).toBeTrue();
        expect(component.fullSize()).toBeFalse();
    });
    
    it('should apply host classes based on inputs', () => {
        fixture.componentRef.setInput('disabled',true);
        fixture.componentRef.setInput('fullSize',true);
        fixture.detectChanges();

        const hostClassList = compiled.classList;

        expect(hostClassList).toContain('pointer-events--none');
        expect(hostClassList).toContain('w--100');
    });
    
    it('should not apply disabled/fullSize classes by default', () => {
        const hostClassList = compiled.classList;

        expect(hostClassList).not.toContain('pointer-events--none');
        expect(hostClassList).not.toContain('w--100');
    });

    it('should apply class \'small\' | \'normal\' | \'large\' on size', () => {
        const button = compiled.querySelector('button')! as HTMLButtonElement;
        const sizes:YdBtnSize[] = ['small','normal','large'];

        for (const size of sizes) {
            fixture.componentRef.setInput('size',size);
            fixture.detectChanges();
            expect(button.classList).toContain(size);

        sizes
        .filter(other => other !== size)
        .forEach(other => {
            expect(button.classList).not.toContain(other);
        });
        }
    });

    it('should apply class \'primary\' | \'secondary\' | \'tertiary\' on buttonStyle', () => {
        const button = compiled.querySelector('button') as HTMLButtonElement;
        expect(button).toBeTruthy();

        const styles:YdBtnStyle[] = ['primary','secondary','tertiary'];
        for (const style of styles) {
            fixture.componentRef.setInput('buttonStyle',style);
            fixture.detectChanges();
            expect(button.classList).toContain('yd-btn__'+style);

        styles
        .filter(other => other !== style)
        .forEach(other => {
            expect(button.classList).not.toContain(`yd-btn__${other}`);
        });
        }
    });

    it('should apply disabled class in button', ()=> {
        const button = compiled.querySelector('button')! as HTMLButtonElement;
        fixture.componentRef.setInput('disabled', true);
        fixture.detectChanges();
        expect(button.classList).toContain('disabled');
    });
    
});