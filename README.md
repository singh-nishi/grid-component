# dynamic-grid

## Installation

To install this library, run:

```bash
$ npm install dynamic-grid --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install dynamic-grid
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'dynamic-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [sukanta2017](mailto:sukanta.biswas@rancelab.com)


## PACKAGE DEVELOPMENT PROCESS

## First, install Yeoman and generator-angular2-library using npm (assuming you already have node.js pre-installed).
npm install -g yo
npm install -g generator-angular2-library

## Make a new directory and cd into it:
mkdir angular-library-name
cd angular-library-name

## Generate your new library:
yo angular2-library

## The generator will prompt you for:
Your full name:
Your email address:
Your library name:
Git repository url:

## After taht add or edit *.ts files in the src/ directory and run:
npm run build
to automatically create all *.js, *.d.ts and *.metadata.json files in the dist directory

## Finally you publish your library to NPM by publishing the contents of the dist directory
npm publish dist

## Publish the contents of the dist directory to NPM
npm publish dist




