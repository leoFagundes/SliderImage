document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    let lastItem = lists[lists.length - 1];
    document.querySelector('.slide').prepend(lastItem);
}
