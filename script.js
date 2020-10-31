
function msg() {
    var name = prompt('Input Your Name');
    var wish = prompt('write her a birthday message')
    alert('Thank You '+ name)
    document.getElementById('nameinput').innerHTML = name + ":"  + " "  + " " + wish
    
}