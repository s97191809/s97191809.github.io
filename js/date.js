const todayDate = document.querySelector("h2#date");
const today = new Date();   

const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1;  // 월
const date = today.getDate();  // 날짜
const day = today.getDay();  // 요일

todayDate.innerText = `${year}년 ${month}월 ${date}일`;