import {Component} from 'angular2/core';
import {LoggingService} from './services/logging-service';
import {CalculatorService} from './services/calculator.service';
import {DataService} from './services/data.services';

@Component ({
  selector: 'component-1',
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
        <div>
            <h1>Data Service</h1>
            <button (click)="onGetData()">Get some data</button>
            <p>Data: {{data}}</p>
            <br>
            <input type="text" #newData>
            <button (click)="onInsert(newData.value)">Insert new data</button>
        </div>
  `,
  providers: [LoggingService, CalculatorService, DataService]
})

export class Component1Component {
    result: string;
    data: string;
    constructor(private _loggingService: LoggingService,
                private _calculatorService: CalculatorService,
                private _dataService: DataService) {}

    onLog(message: string) {
        this._loggingService.log(message);
    }

    onAdd(num1: string, num2:string) {
        this.result = '' +this._calculatorService.add(+num1, +num2);
    }

    onMultiply(num1: string, num2:string) {
        this.result = '' +this._calculatorService.multiply(+num1, +num2);
    }

    onGetData() {
        this.data = this._dataService.getRandomString();
    }

    onInsert(value: string) {
        this._dataService.insert(value);
    }
}
