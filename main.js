let score=0;
const forma=document.querySelector('form');
const field =document.querySelector('.toDoField');
let list=document.createElement('ul');
list.classList.add('toDoListItems');
let foot=document.createElement('footer')
foot.classList.add('todoScore');
let seacrhField=document.querySelector('.search');
let complete=document.createElement('input');
complete.setAttribute('type', 'button');
let need=document.createElement('input');
need.setAttribute('type', 'button');
let completeList=document.createElement('ul');
completeList.classList.add('toDoListItems')
need.classList.add('todobuttons')
complete.classList.add('todobuttons')
need.setAttribute("value","Needed");
complete.setAttribute("value","Completed");



complete.addEventListener('click',()=>{
    if(completeList.childNodes.length==0){
        list.childNodes.forEach((el)=>{
            if(el.className.includes("inher")){
                let listItem=el.cloneNode(true);
                completeList.appendChild(listItem)
            }
            
                
        })
    }
    
    if(list.parentElement==forma){
        forma.removeChild(list)
        forma.append(completeList,foot,need,complete)
    }
    
})
need.addEventListener('click',()=>{
    if(completeList.parentElement==forma){
        forma.removeChild(completeList)
        completeList=document.createElement('ul')
        completeList.classList.add('toDoListItems')
        forma.append(list,foot,need,complete);
        
    }
})





seacrhField.addEventListener('input',(e)=>{

    list.childNodes.forEach(el=>{
        if(!el.textContent.toLowerCase().includes(e.target.value.toLowerCase().trim())){
            el.classList.add('hidd')
        }else{el.classList.remove('hidd')}
    })
})


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
                 forma.removeChild(need)
                 forma.removeChild(complete)
                 forma.removeChild(list);
                 forma.removeChild(foot);
             }
         })
        let complBtn=document.createElement('input')
        complBtn.classList.add('cmplBtn')
        complBtn.setAttribute('type',"button");
        complBtn.addEventListener('click',()=>{
            label.classList.toggle('inher')
        })



        let todo=document.createElement(el);
        let label=document.createElement(child)
        todo.classList.add('todo')
        label.classList.add('toDoItem');
        label.prepend(complBtn)
        label.prepend(todo);
        label.append(btn)
        todo.textContent=value;
        label.appendChild(todo)
        parent.appendChild(label);
        console.log(btn)
    }
}

forma.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(forma.children.length<2&&field.value){
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


console.log(foot.childNodes)