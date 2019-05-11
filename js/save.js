var savedForms = []

document.querySelector('.form_header_save').addEventListener('click', function() {

   savedForms.push(document.querySelector('.field_wrap').cloneNode(true))

})


var userForms = document.querySelector('.user-forms .tool')

userForms.onclick = function(e) {

   var wrapper = document.querySelector('.wrapper')

   wrapper.children[1].remove()
   wrapper.appendChild(savedForms[0])


}
