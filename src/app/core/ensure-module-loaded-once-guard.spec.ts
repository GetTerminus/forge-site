import {
  Optional,
  SkipSelf,
} from '@angular/core';
import { NgModule } from '@angular/core';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';



// Create our own version of the core module:
@NgModule({})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    super(parentModule);
  }
}


describe(`EnsureModuleLoadedOnceGuard`, function() {

  test(`should throw an error if loaded more than once`, function() {
    // It throws when it receives itself:
    expect(() => {
      new CoreModule(CoreModule);
    }).toThrow();

    // In any other case `parentModule` will be undefined:
    expect(() => {
      // tslint:disable-next-line:no-any
      new CoreModule(void 0 as any);
    }).not.toThrow();
  });

});