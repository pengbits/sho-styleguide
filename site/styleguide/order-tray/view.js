import _ from 'underscore';
import View from "./view/base";
import Runtime from "./view/runtime";
import Actions from "./view/actions";
import Utils from "./view/utils";
import Animation from "./view/animation";

_.extend(View.prototype,
  Runtime,
  Actions,
  Utils,
  Animation
);

export default View;
