(function(){
    let screen = document.querySelector('.screen');
    let button = document.querySelectorAll('.btn');
    let equal = document.querySelector('.eq');
    let clear = document.querySelector('.ac');

    button.forEach(function(button){
        button.addEventListener('click',function(e){
            let val = e.target.value;
            screen.value +=val;
        })
    })

    equal.addEventListener('click',function(e){
        if (screen.value === '') {
            screen.value = '';
        }
        else{
            let ans = eval(screen.value);
            screen.value = ans;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value = '';
    })
})();