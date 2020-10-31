
// function msg() {
//     var name = prompt('Input Your Name');
//     var wish = prompt('write her a birthday message')
//     alert('Thank You '+ name)
//     document.getElementById('nameinput').innerHTML = name + ":"  + " "  + " " + wish
    
// }

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#new_task').onsubmit = () =>{
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value + ":"  + " " + document.querySelector('#taskmessage').value
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value = '';
        document.querySelector('#taskmessage').value = '';
        return false;
    };
})