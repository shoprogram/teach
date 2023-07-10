//ボタン要素を取得
const switchBtn = document.getElementsByClassName('session-button');
console.log(switchBtn);
//表示・非表示を切り替える要素を取得
const test = document.getElementsByClassName('test');
console.log(test)

const btn=document.querySelector('session-button');

// btn.addEventListener('click',function(){
//   this.classList.toggle('active');
// });
// function changeElement(el){
//   if(el.style.display==''){
//     el.style.display='none';
//   }else{
//     el.style.display='';
//   }
// }
//styleのdisplayを変更する関数
/*const changeElement = (el)=> {
  //el.classList.toggle('active');
  
  if(el.style.display==''){
    el.style.display='none';
  }else{
    el.style.display='';
  }
}
console.log(
  changeElement(test)
)*/
// document.getElementsByClassName("session-button")
// .onclick=function(){
  
// }
//ボタンを押したときに↑の動作が起こる
// switchBtn.addEventListener('click', function() {
//   console.log("あいうえお");
//   changeElement(test);  
// }, false);
