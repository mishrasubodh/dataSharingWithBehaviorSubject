import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicService } from '../../services/basic.service';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  constructor( private basicService:BasicService){}
  user:any={firstName:'',lastName:''}
  solve(usernew:object) {
  this.basicService.setValue(usernew)
  this.user={}
  }
  clearVale=()=>{
    this.basicService.setValue({}) 
  }
}
