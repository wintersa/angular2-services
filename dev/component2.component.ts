import {Component} from 'angular2/core';
import {LoggingService} from './services/logging-service';
import {CalculatorService} from './services/calculator.service';
import {DataService} from './services/data.services';

@Component ({
  selector: 'component-2',
  template: `
        <div class="container">
            <h4>Logging Service</h4>
            <input type="text" #message>
            <button (click)="onLog(message.value)">Send</button>
        </div>
        <div class="container">
            <h4>Calculator Service</h4>
            <p>Add or multiply these two numbers:</p>
            <input type="text" #num1>
            <input type="text" #num2>
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <button (click)="onAdd(num1.value, num2.value)">Add</button>
            <br>
            <p>Result: <b>{{result}}</b></p>
        </div>
        <div class="container">
            <h4>Data Service</h4>
            <button (click)="onGetData()">Get some data</button>
            <p>Data: <b>{{data}}</b></p>
            <input type="text" #newData>
            <button (click)="onInsert(newData.value)">Insert new data</button>
        </div>
  `,
  providers: [LoggingService, CalculatorService, DataService]
})

export class Component2Component {
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
