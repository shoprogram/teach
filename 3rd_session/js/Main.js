window.onload = function() {
    const bt = document.getElementsByClassName('button');
    
    bt[0].addEventListener('click', () => {
        const textarea = document.getElementById('textarea');
        const answer = document.getElementById('answer');
        answer.innerText = textarea.value;
    },false)

}
// function copyText() {
//     text = document.getElementsByClassName("button");
//     console.log("てすと");
// }