import {Component} from 'angular2/core';
import {Component1Component} from './component1.component';
import {Component2Component} from './component2.component';

@Component({
    selector: 'app',
    template: `
              <h1><b>Angular2 Services Example with DI</b></h1>
              <br>
              <h3><u>First Component</u></h3>
              <component-1></component-1>
              <br>
              <h3><u>Second Component</u></h3>
              <component-2></component-2>
    `,
    directives: [Component1Component, Component2Component]
})
export class AppComponent {

}
