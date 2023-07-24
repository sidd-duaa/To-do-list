const inputBox = document.querySelector('.task');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    if (inputBox.value === ''){
        alert('You must write something');
    }
    else{
        // Creating li
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        // Creating trash can
        var span = document.createElement('span');
        // span.classList.add('span');
        span.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        li.appendChild(span);
        // span.style.background = 'transparent';
    }
    inputBox.value = '';
    saveData();
});

list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data',list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem('data');
}
showData();