import { renderHeader } from "../../../component/auth/header/header.js";
import { renderLoginWrap } from "../../../component/auth/login_wrap/login_wrap.js";
import { renderFooter} from "../../../component/common/footer/footer_inner.js";
import { renderFindWrap} from "../../../component/auth/login_wrap/find_wrap.js";
import { renderGladBanner } from "../../../component/auth/gladbanner/gladbanner.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header")
  const login_wrap = document.getElementById("login_wrap");
  const find_wrap = document.getElementById("find_wrap");
  const gladbanner = document.getElementById("gladbanner");
  const footer = document.getElementById("footer")


  renderHeader(header);
  renderLoginWrap(login_wrap);
  renderFindWrap(find_wrap);
  renderGladBanner(gladbanner);
  renderFooter(footer)
});
