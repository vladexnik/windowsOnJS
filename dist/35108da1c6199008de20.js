import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';
import '../assets/css/style.css';
import '../assets/css/bootstrap.css';
//import './slider';
import '../assets/css/animate.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {
    windowType: 'tree'
  };
  let deadline = '2024-01-10';
  changeModalState(modalState, ['formOfWindow', 'width', 'height'], '.popup_calc_button');
  changeModalState(modalState, ['windowProfile', 'windowType'], '.popup_calc_profile_button');
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
  forms(modalState);
  timer('.container1', deadline);
  images();
});