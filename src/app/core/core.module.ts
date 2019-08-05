import { HttpClientModule } from '@angular/common/http';
import { 
  NgModule, 
  Optional,
  SkipSelf,
} from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
  ]
})


export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    super(parentModule);
  }
}