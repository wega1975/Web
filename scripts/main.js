function setUserName() {
    let name = prompt("请输入你的名字:");
    localStorage.setItem("currentUserName", name);
    h1.textContent = "Hello" + name;
};

window.onload = function(){
    var h1 = document.querySelector("h1");

    if (!localStorage.getItem("currentUserName")) {
        setUserName();
    }
    else {
        let name = localStorage.getItem("currentUserName");
        h1.textContent = "Hello" + name;
    }
}

