import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page'; 
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

toast: any;
  constructor(private router: Router,public toastController: ToastController,public http: HttpClient) { }

  ngOnInit() {
  }

  showToast() {
    this.toast = this.toastController.create({
      message: 'Reserva Finalizada!',
      duration: 500,
      color:'success',
      position: 'middle'
      
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  //pega os valores do form
  form(){
    var nome = document.getElementsByName('nome');
    var nomeval = nome[1]["value"];

    var data = document.getElementsByName('data');
    var dataval = data[1]["value"];
   // console.log(dataval, nomeval);

    var radios = document.getElementsByName('ambientes');
    //console.log(radios);
    for (var i = 0; i < radios.length; i++) {

      if (radios[i]['checked'] == true) {
         
        var escolha = radios[i]['value'];
     
      }
      
    }
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
        
      })
    }
    const apiUrl = "http://localhost/api.php";
    var dados = {'nome':nomeval,'data':dataval,"ambiente":escolha};  
    //console.log(dados);
    
    return this.http.post(apiUrl,dados,httpOptions).subscribe(data=>{
      console.log(data);
    if(data == null){
        this.showToast();
        
        this.router.navigate(["home"]);
      }
     
    }, error=>{
      console.log(error);
    })








  }
  
}
