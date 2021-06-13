import { Module,Mutation,Action,VuexModule } from "vuex-module-decorators";
import axios from "axios";

@Module({namespaced:true,name:'studies', stateFactory:true})
export default class StudyModule extends VuexModule{
  studies = [{name:'Waiting',status:'Waiting'}];

  @Mutation
  set(v: { name: string; status: string; }[]){
    this.studies = v;
  }

  @Action
  async loadStudies(){
    // axios.get('http://localhost:5000/users').then((res)=>{this.set(res.data.users)})
    const update = (await axios.get('http://localhost:5000/studies')).data
    this.set(update.studies);
  }
}