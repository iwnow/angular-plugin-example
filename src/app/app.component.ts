import { Component, Injector, NgModuleFactory, ViewContainerRef } from '@angular/core';
import * as AngularCore from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'hello-world-plugin';

  pluginModuleFactoryName = 'PluginModuleNgFactory';
  pluginUmdModulePath = '/assets/plugin.module.umd.js';

  constructor(public injector: Injector, public viewContainer: ViewContainerRef) {

  }

  load() {
    fetch(this.pluginUmdModulePath)
      .then(response => response.text())
      .then(source => {
        try {
          const exports = {};
          const modules = {
            '@angular/core': AngularCore,
            // '@angular/common': AngularCommon,
            // '@angular/router': AngularRouter,
            // etc...
          };

          const require: any = (module) => modules[module];
          // tslint:disable-next-line:no-eval
          eval(source);
          const moduleFactory: NgModuleFactory<any> = exports[this.pluginModuleFactoryName];
          const modRef = moduleFactory.create(this.injector);
          const componentFactory = modRef.componentFactoryResolver.resolveComponentFactory(this.getEntryComponent(moduleFactory));
          const component = componentFactory.create(modRef.injector);
          const cmpRef = this.viewContainer.createComponent<any>(componentFactory);
          cmpRef.instance.title = 'LOADED:)';
        } catch (e) {
          console.error(e);
        }
      });
  }

  getEntryComponent(moduleFactory: NgModuleFactory<any>) {
    // search (<any>moduleFactory.moduleType).decorators[0].type.prototype.ngMetadataName === NgModule
    return (<any>moduleFactory.moduleType).decorators[0].args[0].entryComponents[0];
  }
}
