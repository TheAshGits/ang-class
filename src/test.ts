// This file is required by karma.conf.js and loads the testing environment and framework.
// The Angular CLI discovers and loads *.spec.ts files automatically.
// Load zone.js first so ProxyZone is available when tests run.
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
