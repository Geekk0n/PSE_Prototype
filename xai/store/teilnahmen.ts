import { Module,Mutation,Action,VuexModule } from "vuex-module-decorators";
import axios from "axios";

@Module({namespaced:true,name:'teilnahmen', stateFactory:true})
export default class TeilnahmenModule extends VuexModule{
  studies = [{name:'Waiting',researcher:'Waiting',category:'Waiting'}];

  @Mutation
  set(v: { name: string; researcher: string; category: string}[]){
    this.studies = v;
  }

  @Action
  async loadTeilnahmen(){
    // axios.get('http://localhost:5000/users').then((res)=>{this.set(res.data.users)})
    const update = (await axios.get('http://localhost:5000/teilnehmen')).data
    this.set(update.studies);
  }
}