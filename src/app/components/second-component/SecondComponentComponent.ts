import { Component} from "@angular/core";
import { BasicService } from "../../services/basic.service";


@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css',
})
export class SecondComponentComponent{
  currentValue:any
  constructor(private basicService:BasicService) {}
  ngOnInit(): void {
    this.basicService.newLoginValue.subscribe({
      next: (data: any) =>{ this.currentValue = data},
      error: (err:Error) =>{console.error('Observable emitted an error: ' + err)},
      complete: () => {console.log('Observable emitted the complete notification')}
    })
  }
}
