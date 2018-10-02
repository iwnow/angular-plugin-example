import { Component, OnInit, Input } from '@angular/core';
import { PluginService } from './plugin.service';

@Component({
  selector: 'plugin-plugin',
  template: `
    <p>
      plugin {{title}}!
    </p>
    <div>from service:{{pluginService.getTest()}}</div>
    <ng-content></ng-content>
  `,
  styles: []
})
export class PluginComponent implements OnInit {

  @Input() title: string;

  constructor(public pluginService: PluginService) { }

  ngOnInit() {
  }

}
