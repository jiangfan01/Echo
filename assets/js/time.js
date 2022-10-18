window.onload = function (){
    let year = document.querySelector(".year")
    let mouth = document.querySelector(".mouth")
    let day = document.querySelector(".day")
    moment.locale('zh-cn')
    let now_year = moment().format('YYYY 年'); //年
    let now_mouth = moment().format('M 月'); //月
    let now_day = moment().format('D 日'); //日
    year.innerHTML = now_year
    mouth.innerHTML = now_mouth
    day.innerHTML = now_day
}