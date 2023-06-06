import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(private router:Router){}
  
  ngOnInit(): void {
    var element = document.getElementById("butao");
    element!.style.visibility="hidden";
    setTimeout(() => {
      element!.style.visibility = "visible";
    }, 3000);
  }

  mudarImg(){
    var element = document.getElementById("butao");
    element!.style.visibility="hidden";
    var img = document.getElementById("img_efeito");
    img!.setAttribute('src', '../../../assets/hackeado.gif');
    navigator.vibrate([500,200,800,200,800,200,500]);
    setTimeout(() => {
      this.router.navigate(['pesquisa']);
      console.log("Vibrando");
    }, 5000);
  }

}
