import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsManagerComponent } from './products-manager.component';

describe('ProductsManagerComponent', () => {
  let component: ProductsManagerComponent;
  let fixture: ComponentFixture<ProductsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
