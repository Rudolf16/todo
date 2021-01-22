////variables
let score=0;
const forma=document.querySelector('form');
const field =document.querySelector('.toDoField');
let list=document.createElement('ul');
list.classList.add('toDoListItems');
let foot=document.createElement('footer')
foot.classList.add('todoScore');
let seacrhField=document.querySelector('.search');
let complete=crtBtn('todobuttons',"Completed")
let need=crtBtn('todobuttons',"Needed")
let completeList=document.createElement('ul');
completeList.classList.add('toDoListItems');


///Events
complete.addEventListener('click',()=>{
    field.readOnly=true;
    list.childNodes.forEach(el=>{
        if(el.className.includes('inher')){
            el.classList.remove('none')
        }else{el.classList.add('none')}
    })
})
need.addEventListener('click',()=>{
    field.readOnly=false;
    list.childNodes.forEach(el=>{
        if(!el.className.includes('inher')){
            el.classList.remove('none')
        }else{el.classList.add('none')}
    })
})

seacrhField.addEventListener('input',(e)=>{

    list.childNodes.forEach(el=>{
        if(!el.textContent.toLowerCase().includes(e.target.value.toLowerCase().trim())){
            el.classList.add('hidd')
        }else{el.classList.remove('hidd')}
    })
})





forma.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(forma.children.length<4&&field.value){
        forma.append(list,foot,need,complete)
        createElement(list,'li','label',field.value);
        scoreTodo(true);
        field.value=""
    }else if(field.value){
        createElement(list,'li','label',field.value);
        scoreTodo(true)
        field.value=""
    }
})

////////////////////function

function crtBtn(name=false,value=false){
    
        let btn=document.createElement('input');
        btn.setAttribute('type', 'button');
        if(name){
            btn.classList.add(name)
        }
        if(value){
            btn.setAttribute("value",value);
        }
        return btn
}

function scoreTodo(bool){
    if(bool){
        score++
    }else{score--}
    foot.textContent=`You need done ${score} item`;
}

function createElement(parent,el,child,value){
    if(value){
        let btn=crtBtn("removeTodo")
        btn.addEventListener('click',()=>{
            scoreTodo(false)
             parent.removeChild(label)
             if(forma.children[1].children.length==0){
                forma.removeChild(list);
                forma.removeChild(foot);
             }
         })
        let complBtn=crtBtn('cmplBtn');
        complBtn.addEventListener('click',()=>{
            label.classList.toggle('inher')
            label.classList.toggle('none')
        })
        let todo=document.createElement(el);
        let label=document.createElement(child)
        todo.classList.add('todo')
        todo.textContent=value;
        label.classList.add('toDoItem');
        label.append(complBtn,todo,btn)
        parent.appendChild(label);
        console.log(btn)
    }
}