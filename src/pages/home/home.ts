import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
  public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
this.items = db.list('/algebra');

this.items.subscribe((data)=>{
    console.log(data);
    if(data!=null){
      let mathjax=document.getElementsByClassName('mathjax');
       eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
      eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
    }
  })  

  }

  

}
