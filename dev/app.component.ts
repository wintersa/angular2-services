import {Component} from 'angular2/core';
import {Component1Component} from './component1.component';

@Component({
    selector: 'app',
    template: `
              <h2>Hello Tony</h2>
              <br><br>
              <component-1></component-1>

    `,
    directives: [Component1Component]
})
export class AppComponent {

}
