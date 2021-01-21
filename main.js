const forma=document.querySelector('form');
const field =document.querySelector('.toDoField');
let list=document.createElement('ul');
list.classList.add('toDoListItems');
let foot=document.createElement('footer')
let seacrhField=document.querySelector('.search');
seacrhField.addEventListener('input',(e)=>{

    list.childNodes.forEach(el=>{
        if(!el.textContent.toLowerCase().includes(e.target.value.toLowerCase().trim())){
            el.classList.add('hidd')
        }else{el.classList.remove('hidd')}
    })
})
let score=0;

function scoreTodo(bool){
    if(bool){
        score++
    }else{score--}
    foot.textContent=`You need done ${score} item`;
}
function createElement(parent,el,child,value){
    if(value){
        let btn=document.createElement('input')
        btn.setAttribute('type',"button");
        btn.classList.add('removeTodo')
        btn.addEventListener('click',()=>{
            scoreTodo(false)
             parent.removeChild(label)
             if(forma.children[1].children.length==0){
                 forma.removeChild(list);
                 forma.removeChild(foot);
             }
         })
        let todo=document.createElement(el);
        let label=document.createElement(child)
        todo.classList.add('todo')
        label.classList.add('toDoItem');
        label.appendChild(todo);
        label.appendChild(btn)
        todo.textContent=value;
        label.appendChild(todo)
        parent.appendChild(label);
        console.log(btn)
    }
}

forma.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(forma.children.length<2&&field.value){
        forma.appendChild(list);
        forma.appendChild(foot);
        createElement(list,'li','label',field.value);
        scoreTodo(true)
    }else{
        createElement(list,'li','label',field.value);
        scoreTodo(true)
    }
})


console.log(foot.childNodes)