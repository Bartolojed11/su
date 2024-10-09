import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBuromobelexperte,
  faDeezer,
} from "@fortawesome/free-brands-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";

import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faBezierCurve,
  faPenNib,
  faFont,
  faLayerGroup,
  faAward,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faMagnifyingGlass,
  faXmark,
  faBuromobelexperte,
  faBezierCurve,
  faPenNib,
  faFont,
  faLayerGroup,
  faDeezer,
  faFaceSmileBeam,
  faAward,
  faChampagneGlasses
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
