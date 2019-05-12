function MovingBlock() {

   var that = this

   this.block = document.createElement('div');

   this.canBeMoving = true
   this.wasAdded = false

   this.distBeforeCursor = {
      x: 75,
      y: 20
   }

   this.shouldWeAddForm = true
   this.createNewMovingElement = function(e, text) {

      this.block.innerHTML = text

      this.block.classList.add('new-element')
      document.body.appendChild( this.block )
      this.block = document.querySelector('.new-element')

      this.block.style.top = e.pageY - 20 + 'px'
      this.block.style.left = e.pageX - 75 + 'px'
      
   }


   this.block.addEventListener("mousedown", function(e) {

      if (!that.wasAdded) {

         that.canBeMoving = true

         that.distBeforeCursor.x = e.pageX - that.block.getBoundingClientRect().left
         that.distBeforeCursor.y = e.pageY - that.block.getBoundingClientRect().top
      }
   })


   window.addEventListener( 'mousemove', function(e)  {
  
      if (that.canBeMoving) {

         that.block.style.top = e.pageY - that.distBeforeCursor.y + 'px'
         that.block.style.left = e.pageX - that.distBeforeCursor.x + 'px'


      }


   })




   this.addEventsInForm = function() {

      if (that.wasAdded) {
      
   
         that.mover = that.block.querySelector('.mover')
   
   
         that.mover.addEventListener("mousedown", function(e) {

               settingsBlock.innerHTML = ''
               for (var i = 0; i < that.settings.blocks.length; i++) {
                  settingsBlock.appendChild(that.settings.blocks[i].elem)
               }

               that.canBeMoving = true
      
               that.distBeforeCursor.x = e.pageX - that.block.getBoundingClientRect().left
               that.distBeforeCursor.y = e.pageY - that.block.getBoundingClientRect().top
         })
   
         window.addEventListener("mouseup", function(e) {
            that.canBeMoving = false
         })
   
   
   
   
      }

   }
  



   this.createNewForm = function(elem, e, type) {
      that.canBeMoving = false
      if ( that.block && isFormCreatorUnderCursor(e) ) {
         that.wasAdded = true

         that.block.classList.remove('new-element')

         that.block.innerHTML = elem
         that.block = that.block.children[0]

         form.appendChild(that.block)

         that.block.style.top = e.pageY - 17 - that.distBeforeCursor.y + 'px'
         that.block.style.left = e.pageX + 35 - that.distBeforeCursor.x + 'px'

         that.addEventsInForm()

         

         // Так как в большинстве случаев настройки равны - во избежание копипасты просто вставляем подходящий класс (LabelSettings)
         if (type == 'label') {
            that.settings = new LabelSettings(that.block)
         }
         if (type == 'text') {
            that.settings = new LabelSettings(that.block)
         }
         if (type == 'password') {
            that.settings = new LabelSettings(that.block)
         }
         if (type == 'email') {
            that.settings = new LabelSettings(that.block)
         }
         if (type == 'radio') {
            that.settings = new RadioSettings(that.block)
         }
         if (type == 'checkbox') {
            that.settings = new RadioSettings(that.block)
         }
         if (type == 'select') {
            that.settings = new SelectSettings(that.block)
         }
         if (type == 'button') {
            that.settings = new ButtonSettings(that.block)
         }




      }
   }


   this.shouldWeDeleteForm = function(e) {
      if (that) {
         if ( 
            that.block.getBoundingClientRect().top < form.getBoundingClientRect().top ||
            that.block.getBoundingClientRect().left < form.getBoundingClientRect().left ||
            that.block.getBoundingClientRect().right > form.getBoundingClientRect().right ||
            that.block.getBoundingClientRect().bottom > form.getBoundingClientRect().bottom
         ) {
            appendedBlocks[appendedBlocks.indexOf(this)] = {}
            that.block.remove()
            settingsBlock.innerHTML = ''
            that = ''
         }
      }
   }


}





/* 
function AddedBlock(elem) {
   var that = this

   that.distBeforeCursor = {}

   elem.children[0].addEventListener('mousedown', function(e) {
      that.canBeMoving = true

      that.distBeforeCursor.x = e.pageX - elem.getBoundingClientRect().left
      that.distBeforeCursor.y = e.pageY - elem.getBoundingClientRect().top
   })
   elem.children[0].addEventListener('mouseup', function() {
      that.canBeMoving = false
   })
   window.addEventListener('mousemove', function(e) {
      if (that.canBeMoving) {

         elem.style.top = e.pageY - that.distBeforeCursor.y + 'px'
         elem.style.left = e.pageX - that.distBeforeCursor.x + 'px'


      }
   })
} */
