function addLoginEvent(){
    const emailInput = document.querySelector("#email")
    const passwordInput = document.querySeㅌㅈlector("#password")
    const loginBtn = document.querySelector(".btn_login_button");

    loginBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if(!email || !password){
            alert("이메일과 비밀번호를 입력해주세요.");
            return;
        }
    });
}   
