import {Plugin} from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
// Import Axios for Vuex Store

let $axios: NuxtAxiosInstance;

const nuxtAxiosExtractorPlugin: Plugin = (context) => {
  $axios = context.$axios;
}

export {$axios}
export default nuxtAxiosExtractorPlugin;