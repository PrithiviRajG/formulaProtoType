import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Tier2Page } from '../tier2Page/tier2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contentsRefSnapShot: FirebaseListObservable<any[]>;
  tier2Page : any;

  constructor(public navCtrl: NavController,
   public db: AngularFireDatabase, public nav:Nav) {
    this.tier2Page=Tier2Page;
this.contentsRefSnapShot=this.db.list('/contents', { preserveSnapshot: true });

/*this.contentsRefSnapShot.subscribe((data)=>{
    console.log(data);
    if(data!=null){
      let mathjax=document.getElementsByClassName('mathjax');
       eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
      eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
    }
  })  */

}

tier1Selected(tier1Key,tier1Title){
   this.nav.push(this.tier2Page, {
          tier1key: tier1Key,
          tier1Title : tier1Title
      });

}

  

}
