import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponent } from '@terminus/ngx-tools/testing';

import { AppComponent } from './app.component';

@Component({
  template:`
  <router-outlet></router-outlet>
  `,
})
class TestHostComponent {}

describe('AppComponent', () => {

  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    fixture = createComponent(TestHostComponent, [AppComponent], [RouterTestingModule]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, function() {
    expect(component).toBeTruthy();
  });

});
