import { renderLoginWrap } from "../../../component/auth/login_wrap/login_wrap.js";
import { renderNavigator } from "../../../component/common/header/navigator/navigator.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("navigator")
  const login_wrap = document.getElementById("login_wrap");
  renderNavigator(header);
  renderLoginWrap(login_wrap);
});
