var tools = document.querySelectorAll('.tools_wrapper .tool')



tools.forEach(function(item) {

   item.addEventListener('mousedown', function(e) {

      if ( document.querySelector('.new-element') ) return


      // Велосипедим
      if (item.classList.contains('new-label')) {
         appendedBlocks.push(new Label())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Header')
      }

      if (item.classList.contains('new-text')) {
         appendedBlocks.push(new Text())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Text')
      }

      if (item.classList.contains('new-password')) {
         appendedBlocks.push(new Password())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Password')
      }

      if (item.classList.contains('new-email')) {
         appendedBlocks.push(new Email())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Email')
      }

      if (item.classList.contains('new-radio')) {
         appendedBlocks.push(new Radio())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Radio')
      }

      if (item.classList.contains('new-checkbox')) {
         appendedBlocks.push(new Checkbox())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Checkbox')
      }

      if (item.classList.contains('new-select')) {
         appendedBlocks.push(new Select())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Select')
      }

      if (item.classList.contains('new-button')) {
         appendedBlocks.push(new Button())
         appendedBlocks[appendedBlocks.length-1].createNewMovingElement(e, 'Button')
      }






   })
   
})





function Label() {
   

   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);



   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {

         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-heading"></i><input type="text" class="form_element_input" placeholder="Text"></div></div>', e, 'label')

      }
      that.shouldWeDeleteForm(e)
   })





}




function Text() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {

         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-font"></i><input type="text" class="form_element_input" placeholder="Text"></div></div>', e, 'text')

      }
      that.shouldWeDeleteForm(e)
   })
}



function Password() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-key"></i><input type="password" class="form_element_input" placeholder="Password"></div></div>', e, 'password')
      }
      that.shouldWeDeleteForm(e)
   })
}



function Email() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-envelope"></i><input type="text" class="form_element_input" placeholder="E-mail"></div></div>', e, 'email')
      }
      that.shouldWeDeleteForm(e)
   })
}




function Radio() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-envelope"></i><input type="text" class="form_element_input" placeholder="E-mail"></div></div>', e, 'radio')
      }
      that.shouldWeDeleteForm(e)
   })
}




function Checkbox() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-envelope"></i><input type="text" class="form_element_input" placeholder="E-mail"></div></div>', e, 'checkbox')
      }
      that.shouldWeDeleteForm(e)
   })
}



function Select() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><div class="label_elem"><i class="fas fa-envelope"></i><input type="text" class="form_element_input" placeholder="E-mail"></div></div>', e, 'select')
      }
      that.shouldWeDeleteForm(e)
   })
}



function Button() {
   var that = this

   // Делаем этот блок перемещающимся (файл moving-block.js)
   MovingBlock.apply(this, arguments);


   window.addEventListener('mouseup', function(e)  {
      // Функция из moving-block.js
      if (!that.wasAdded && that.shouldWeAddForm) {
         that.shouldWeAddForm = false
         that.createNewForm('<div class="form_element"><div class="mover"></div><input type="button" class="button" value="Отправить"></div>', e, 'button')
      }
      that.shouldWeDeleteForm(e)
   })
}
