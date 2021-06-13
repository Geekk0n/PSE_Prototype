import { Module,Mutation,Action,VuexModule } from "vuex-module-decorators";

@Module({namespaced:true,name:'content', stateFactory:true})
export default class ContentModule extends VuexModule{
  activeTab = 'ViewContentInfo';

  @Mutation
  setTab(newTab:string){
    this.activeTab = newTab;
  }
}