import {Component} from 'angular2/core';
import {LoggingService} from './services/logging-service';
import {CalculatorService} from './services/calculator.service';

@Component ({
    selector: 'component-2',
    template: `
          <div>
              <h3>Logging Service</h3>
              <input type="text" #message>
              <button (click)="onLog(message.value)">Send</button>
          </div>
          <div>
              <h3>Calculator Service</h3>
              <p>Add or multiply these two numbers:</p>
              <input type="text" #num1>
              <input type="text" #num2>
              <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
              <button (click)="onAdd(num1.value, num2.value)">Add</button>
              <br>
              <p><b>Result: {{result}}</b></p>
          </div>
    `,
    providers: [LoggingService, CalculatorService]
})

export class Component2Component {
  result: string;
  constructor(private _loggingService: LoggingService,
              private _calculatorService: CalculatorService) {}

  onLog(message: string) {
      this._loggingService.log(message);
  }

  onAdd(num1: string, num2:string) {
      this.result = '' +this._calculatorService.add(+num1, +num2);
  }

  onMultiply(num1: string, num2:string) {
      this.result = '' +this._calculatorService.multiply(+num1, +num2);
  }
}
