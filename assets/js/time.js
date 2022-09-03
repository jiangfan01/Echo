window.onload = function (){
    let now_time = document.querySelector(".now-time")
    moment.locale('zh-cn')
    let time = moment().format('LL');
    now_time.innerHTML = time
}