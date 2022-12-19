import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faChevronLeft);
  library.add(faChevronRight);
  library.add(faUserSecret);

  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
