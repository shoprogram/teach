window.onload = function() {
    const switchBtn = document.getElementById('session-button');
    console.log(switchBtn);
    //表示・非表示を切り替える要素を取得
    const test = document.getElementById('test');
    console.log(test)

    switchBtn.addEventListener("click",function() {
        if (test.style.display == "none") {
            test.style.display = "block";
        } else {
            test.style.display = "none";
        }
    });




}
