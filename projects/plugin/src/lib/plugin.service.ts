import { Injectable } from '@angular/core';

@Injectable()
export class PluginService {

  constructor() { }

  getTest() {
    return 'test ok';
  }
}
