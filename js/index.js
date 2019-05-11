function log(text) {
   console.log(text)
}

var cursor = {
   isMouseDown: false
}

var appendedBlocks = []

window.addEventListener('mousedown', function() {
   cursor.isMouseDown = true
})

window.addEventListener('mouseup', function() {
   cursor.isMouseDown = false
})

var form = document.querySelector('.form')


function isFormCreatorUnderCursor(e) {

   var formCreatorCords = form.getBoundingClientRect()

   if (
      e.pageY > formCreatorCords.top &&
      e.pageY < formCreatorCords.bottom &&
      e.pageX > formCreatorCords.left &&
      e.pageX < formCreatorCords.right
   ) {
      return true
   } else {
      return false
   }

}

