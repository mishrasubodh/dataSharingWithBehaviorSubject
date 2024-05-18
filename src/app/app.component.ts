import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { SecondComponentComponent } from './components/second-component/SecondComponentComponent';
import { ThirdComponentComponent } from "./components/third-component/third-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent]
})
export class AppComponent {
  title = 'sharedData';
}
