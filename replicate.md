## Replicating this Project
Usually I could copy paste from a previous Angular 6+ project at its infancy state that I have developed and then run a refactor.
I've used Angular Schematics on projects that were already setup, but I wanted to explore build one from scatch with schematics

## Angular
```
$ npm install -g @angular/cli
$ ng new book-library
$ cd book-library
```

## NgRx
```
$ npm install @ngrx/schematics --save-dev
$ npm install @ngrx/{store,effects,entity,store-devtools} --save
$ ng generate @ngrx/schematics:store State --root --module app.module.ts
$ ng generate @ngrx/schematics:effect App --root --module app.module.ts
$ ng config cli.defaultCollection @ngrx/schematics
```

### Generating Book Module and NgRx Feature
```
$ ng generate module book --routing --flat false
$ ng generate feature book/book -m book/book.module.ts --group
$ ng generate container book/bookPage
```
This varies from the code on NgRx documentation site. Note the `book/` prefixing `book.module.ts`. If you omit the prefix
the command will fail

## Material
```
$ npm install --save @angular/material @angular/cdk @angular/animations
$ ng add @angular/material
```

```
$ ng generate @angular/material:nav navigation
```
This was't exactly how I wanted it to be, so I took the generated code and replace app.component with it


## NgRx Routing
There doesn't appear to be any schematics for NgRx routing at time of writing this
```
$ npm install @ngrx/router-store --save
```
