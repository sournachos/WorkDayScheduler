let txt = $('.textArea');
let txtDiv = $('.textDiv');
let btn = $('.btn')

btn.addEventListener('click', function(){
    for(txt in txtDiv){
 localStorage.setItem('txt',JSON.stringify(txt));
 txtShow = JSON.parse(localStorage.getItem('txt'));
 txt.textContent = txtShow;
}
})

