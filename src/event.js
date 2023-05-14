//count가 있어야한다.
//둠으로 바꿀 텍스트 부분을 가져와야한다. 
//setinterval(function(count를 감소시키는 함수))선언한다.
//count가 1초에 1씩 감소해야한다.
//0이 되면 더 이상 감소하면 안된다
//초마다 텍스트가 바뀌어야한다.

let count = 5;
const timesale = document.querySelector('.timesale');
setInterval(function(){
    if(count > 0){
        console.log(count);
        count--; 
        timesale.textContent = count;
    }
}, 1000)
setTimeout(() => {
    alert('세일마감')
}, 5200);


