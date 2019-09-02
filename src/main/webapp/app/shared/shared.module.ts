import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirstJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FirstJhSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirstJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstJhSharedModule {
  static forRoot() {
    return {
      ngModule: FirstJhSharedModule
    };
  }
}
