import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TestPipe } from './pipes/test.pipe';
import { TestDirective } from './directives/test.directive';

/** 存放套件的 module*/
// const materialModules = [];
/** component */
const components = [
    ButtonComponent,
    SideBarComponent,
];
/** pipe */
const pipes = [
  TestPipe
];
/** directive */
const directives = [
  TestDirective
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    // ...materialModules
  ]
})
export class SharedModule { }
