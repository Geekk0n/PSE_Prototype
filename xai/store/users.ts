import { Module,Mutation,Action,VuexModule } from "vuex-module-decorators";
import { $axios } from "../plugins/nuxt-axios-exporter";
import axios from "axios";

@Module({namespaced:true,name:'users', stateFactory:true})
export default class UserModule extends VuexModule{
  users = [{name:'Waiting',role:'Waiting'}];

  @Mutation
  set(v: { name: string; role: string; }[]){
    this.users = v;
  }

  @Action
  async loadUsers(){
    // axios.get('http://localhost:5000/users').then((res)=>{this.set(res.data.users)})
    const update = (await axios.get('http://localhost:5000/users')).data
    this.set(update.users);
  }
}