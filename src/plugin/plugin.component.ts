import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plugin-hello-world',
  template: `
    <h2>HELLO WORLD, PLUGIN!</h2>
  `
})
export class HelloWorldComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
