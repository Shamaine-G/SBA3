document.body.style.backgroundColor = "purple"

let deleteBtn = document.getElementById('deleteThings');
let addBtn = document.querySelector('#addThings');
let toDoBox = document.getElementById('listContainer');
let inputBox = document.querySelector('#inputBox');

addBtn.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputBox.value;
    toDoBox.appendChild(paragraph)
    inputBox.value = "";



    paragraph.addEventListener('dblclick', function(){
        window.alert('Are you sure you want to delete this item?');
        toDoBox.removeChild(paragraph);
    })

     deleteBtn.addEventListener('click', function(){    
            // paragraph.previousSibling.style.textDecoration = "line-through";
            paragraph.style.textDecoration = "line-through";
        
    })

     deleteBtn.addEventListener('dblclick', function(){    
            // paragraph.previousSibling.style.textDecoration = "line-through";
        toDoBox.removeChild(paragraph);        
    })
})