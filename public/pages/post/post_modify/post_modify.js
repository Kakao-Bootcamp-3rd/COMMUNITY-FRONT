
import { renderNavigator } from "/component/common/header/navigator/navigator.js";
import { renderInfoWrap } from "/component/post/post_modify/info_wrap/info_wrap.js";
import { renderTitleWrap } from "/component/post/post_modify/title_wrap/title_wrap.js";
import { renderArticleWrap } from "/component/post/post_modify/article_wrap/article_wrap.js";
import { renderImageWrap } from "/component/post/post_modify/image_wrap/image_wrap.js";
import { renderModifyButtonWrap } from "/component/post/post_modify/modify_button_wrap/modify_button_wrap.js";
import { renderFooter } from "/component/common/footer/footer_inner.js";


document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const info_wrap = document.getElementById("info_wrap");
  const title_wrap = document.getElementById("title_wrap");
  const article_wrap = document.getElementById("article_wrap");
  const image_wrap = document.getElementById("image_wrap");
  const modify_button_wrap = document.getElementById("modify_button_wrap");
  const footer = document.getElementById("footer");

  renderNavigator(header);
  renderInfoWrap(info_wrap);
  renderTitleWrap(title_wrap);
  renderArticleWrap(article_wrap);
  renderImageWrap(image_wrap);
  renderModifyButtonWrap(modify_button_wrap);
  renderFooter(footer);

});