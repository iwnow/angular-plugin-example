import { NgModule } from '@angular/core';
import { PluginComponent } from './plugin.component';
import { PluginService } from './plugin.service';

@NgModule({
  imports: [
  ],
  declarations: [PluginComponent],
  exports: [PluginComponent],
  entryComponents: [PluginComponent],
  providers: [PluginService]
})
export class PluginModule { }
