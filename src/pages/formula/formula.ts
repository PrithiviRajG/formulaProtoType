import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-formula',
  templateUrl: 'formula.html'
})
export class FormulaPage {
  tier1key : any;
  tier2key : any;
  formulaRefSnapShot: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams:NavParams
  , public db: AngularFireDatabase, public nav:Nav) {
    this.tier2key = navParams.data.tier2key;
    this.tier1key = navParams.data.tier1key;
    console.log("tier 1 key "+this.tier1key);
    console.log("tier 2 key "+this.tier2key);

    this.formulaRefSnapShot=this.db.list('/formula/'+this.tier1key+'/'+this.tier2key, { preserveSnapshot: true });

this.formulaRefSnapShot.subscribe((data)=>{
    console.log(data);
    if(data!=null){
      let mathjax=document.getElementsByClassName('mathjax');
       eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
      eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, mathjax])');
    }
  })  


  }

}
