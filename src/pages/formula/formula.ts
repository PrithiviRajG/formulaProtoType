import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig }
 from '@ionic-native/admob-free';

@Component({
  selector: 'page-formula',
  templateUrl: 'formula.html'
})
export class FormulaPage {
  tier1key : any;
  tier2key : any;
  tier1Title : any;
  tier2Title : any;
  formulaRefSnapShot: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams:NavParams
  , public db: AngularFireDatabase, public nav:Nav, private admobFree: AdMobFree) {
    this.tier2key = navParams.data.tier2key;
    this.tier1key = navParams.data.tier1key;
    this.tier2Title = navParams.data.tier2Title;
    this.tier1Title = navParams.data.tier1Title;
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
  });

  //Banner
  /*
  const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: true,
 autoShow: true,
 id: 'ca-app-pub-5757421261447349/8084586117'
};
this.admobFree.banner.config(bannerConfig);

this.admobFree.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
    console.log("success")
  })
  .catch(e => console.log(e));
  */

  //Interstitial

  /*
  const interstitialConfig: AdMobFreeInterstitialConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: true,
 autoShow: true,
 id: 'ca-app-pub-5757421261447349/6189050516'
};

this.admobFree.interstitial.config(interstitialConfig);

this.admobFree.interstitial.prepare()
  .then(() => {
    // interstitial Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
    console.log("success")
  })
  .catch(e => console.log(e));
*/

//Reward video

  
  const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: false,
 autoShow: true,
 id: 'ca-app-pub-5757421261447349/2397979315'
};

this.admobFree.rewardVideo.config(rewardVideoConfig);

this.admobFree.rewardVideo.prepare()
  .then(() => {
    // interstitial Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
    console.log("success");
    this.admobFree.rewardVideo.show();
  })
  .catch(e => console.log(e));



}




}
