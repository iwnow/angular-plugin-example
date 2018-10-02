import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './plugin.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'hello',
      component: HelloWorldComponent
    }
  ])]
})
export class PluginRoutingModule {}

@NgModule({
  imports: [CommonModule, PluginRoutingModule],
  declarations: [HelloWorldComponent]
})
export class PluginModule { }
