import { Component } from '@angular/core';
import { NavController, NavParams,Nav } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { FormulaPage } from '../formula/formula';
@Component({
  selector: 'page-tier2',
  templateUrl: 'tier2.html'
})
export class Tier2Page {
  tier1key : any;
  tier1Title : any;
  
  tier1RefSnapShot :FirebaseListObservable<any>;
  formulaPage : any;
  constructor(public navCtrl: NavController, public navParams:NavParams
  , public db: AngularFireDatabase, public nav:Nav) {
    this.tier1key = navParams.data.tier1key;
    this.tier1Title = navParams.data.tier1Title;
    console.log(this.tier1key);
    this.formulaPage=FormulaPage;
    this.tier1RefSnapShot=this.db.list('/contents/'+this.tier1key, { preserveSnapshot: true });
  }

  tier2Selected(tier2key,tier2Title){
     this.nav.push(this.formulaPage, {

          tier2key: tier2key,
          tier1key : this.tier1key,
          tier1Title : this.tier1Title,
          tier2Title : tier2Title
      });

  }

}
