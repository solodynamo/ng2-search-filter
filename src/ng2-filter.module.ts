/**
 * Created by vadimdez on 28/11/2016.
 */
import { NgModule } from '@angular/core';
import { Ng2SearchPipe } from './ng2-filter.pipe';

@NgModule({
  declarations: [Ng2SearchPipe],
  exports: [Ng2SearchPipe]
})

export class Ng2SearchPipeModule {}
