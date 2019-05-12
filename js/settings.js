var settingsBlock = document.querySelector('.settings')



function Range(img, text, style, form, limits) {

   this.create = function() {
      this.elem = document.createElement('div');

      this.elem.innerHTML = '<div class="setting"><i class="'+img+'"></i><p>'+text+'</p><input type="range" min="'+limits.min+'" max="'+limits.max+'" value="'+limits.standart+'"></div>'

      this.elem.querySelector('input').addEventListener('input', function() {

         if (style == 'width') {
            form.children[1].style.width = this.value + 'px'
            form.children[1].children[1].style.width = this.value - 50 + 'px'

            form.children[1].style.height = this.value/5 + 'px'
            form.children[1].children[1].style.height = this.value/5 - 2 + 'px'
         }

         if (style == 'fontSize') {
            form.children[1].children[1].style.fontSize = this.value + 'px'
         }

         if (style == 'buttonFontSize') {
            form.children[1].style.fontSize = this.value + 'px'
         }

         if (style == 'borderRadius') {
            form.children[1].style.borderRadius = this.value + 'px'
         }

         if (style == 'button-width') {
            form.children[1].style.width = this.value + 'px'
            form.children[1].style.height = this.value/5 + 'px'
         }
      })

   }
   this.create()

}


// Класс Select уже существует
function SelectInSetting(img, text, html, style, form) {

   this.create = function() {

      this.elem = document.createElement('div');

      this.elem.innerHTML = '<div class="setting"><i class="'+img+'"></i><p>'+text+'</p>'+html+'</div>'

      this.elem.querySelector('select').addEventListener('change', function() {

         if (style == 'FontFamily') {
            form.children[1].children[1].style.fontFamily = this.value
         }


      })

   }
   this.create()

}





function Color(img, text, style, form) {

   this.create = function() {

      this.elem = document.createElement('div');
      this.elem.innerHTML = '<div class="setting"><i class="'+img+'"></i><p>'+text+'</p><input type="color"></div>'

      this.elem.querySelector('input').addEventListener('input', function() {


         if (style == 'color') {
            form.children[1].children[1].style.color = this.value
         }
         if (style == 'button-color') {
            form.children[1].style.color = this.value
         }
         if (style == 'background') {
            form.children[1].style.background = this.value
         }
         if (style == 'border') {
            form.children[1].style.border = '2px solid ' + this.value
         }
         if (style == 'selectColor') {
            form.children[1].style.color = this.value
         }

      })

   }
   this.create()

}



function TextElem(img, text, form) {

   this.create = function() {

      this.elem = document.createElement('div');
      this.elem.innerHTML = '<div class="setting"><i class="'+img+'"></i><p>'+text+'</p><input type="text"></div>'

      this.elem.querySelector('input').addEventListener('input', function() {


         form.children[1].children[0].name = this.value

      })

   }
   this.create()

}





function OptionAdder(form) {


   this.create = function() {




      var that = this

      this.elem = document.createElement('div');
      this.elem.innerHTML = '<div class="setting setting-adder"><div class="wrapper-of-adder"><p>Option</p><input type="text" class="form_element_input" placeholder="Text"><i class="fas fa-plus add-option"></i></div> <div class="wrapper-of-added-options"><div class="left-colomn"><i class="fas fa-list"></i><p>ListOptions</p></div><ul class="right-colomn"></ul></div></div>'

      this.options = this.elem.querySelector('.right-colomn')


      // Создаем самый первый (главный) option

      var firtsOption = document.createElement('li')
      firtsOption.innerHTML = '<p>Выбор</p><i class="fas fa-trash"></i>'

      firtsOption.querySelector('i').addEventListener('click', function() {
         this.parentNode.remove()
      })

      this.options.appendChild(firtsOption)



      this.elem.querySelector('.add-option').addEventListener('click', function() {

         var newOption = document.createElement('li');

         var value = this.parentNode.children[1].value

         if (value != '') {
            
            newOption.innerHTML = '<p>'+value+'</p><i class="fas fa-trash"></i>'


            that.options.appendChild(newOption)
            form.children[1].innerHTML += '<option>'+value+'</option>'


            newOption.querySelector('i').addEventListener('click', function(e) {
               for (var i = 0; i < that.options.children.length; i++) {
                  if (that.options.children[i] == e.target.parentNode) {
                     form.children[1].children[i].remove()
                  }
               }
               this.parentNode.remove()
            })



            this.parentNode.children[1].value = ''

         }


      })




     

   }
   this.create()

}



























function LabelSettings(elem) {
   
   var that = this
   this.blocks = []
   this.blocks.push(new Range('fas fa-arrows-alt-h', 'Width', 'width', elem, {min: 100, max: 300, standart: 150}))
   this.blocks.push(new Range('fas fa-text-width', 'FontSize', 'fontSize', elem, {min: 5, max: 50, standart: 14}))
   this.blocks.push(new Range('fab fa-cuttlefish', 'borderRadius', 'borderRadius', elem, {min: 0, max: 100, standart: 0}))
   this.blocks.push(new SelectInSetting('fas fa-font', 'FontFamily', '<select><option>Arial</option><option>Times New Roman</option></select>', 'FontFamily', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'FontColor', 'color', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BackgroundColor', 'background', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BorderColor', 'border', elem))

   settingsBlock.innerHTML = ''
   for (var i = 0; i < this.blocks.length; i++) {
      settingsBlock.appendChild(this.blocks[i].elem)
   }

}


function RadioSettings(elem) {
   
   var that = this
   this.blocks = []
   this.blocks.push(new TextElem('fas fa-layer-group', 'Group', elem))
   this.blocks.push(new Range('fas fa-arrows-alt-h', 'Width', 'width', elem, {min: 100, max: 300, standart: 150}))
   this.blocks.push(new Range('fas fa-text-width', 'FontSize', 'fontSize', elem, {min: 5, max: 50, standart: 14}))
   this.blocks.push(new Range('fab fa-cuttlefish', 'borderRadius', 'borderRadius', elem, {min: 0, max: 100, standart: 0}))
   this.blocks.push(new SelectInSetting('fas fa-font', 'FontFamily', '<select><option>Arial</option><option>Times New Roman</option></select>', 'FontFamily', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'FontColor', 'color', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BackgroundColor', 'background', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BorderColor', 'border', elem))

   settingsBlock.innerHTML = ''
   for (var i = 0; i < this.blocks.length; i++) {
      settingsBlock.appendChild(this.blocks[i].elem)
   }

}


function SelectSettings(elem) {
   
   var that = this
   this.blocks = []
   this.blocks.push(new Color('fas fa-eye-dropper', 'FontColor', 'selectColor', elem))
   this.blocks.push(new OptionAdder(elem))

   settingsBlock.innerHTML = ''
   for (var i = 0; i < this.blocks.length; i++) {
      settingsBlock.appendChild(this.blocks[i].elem)
   }

}


function ButtonSettings(elem) {

   var that = this
   this.blocks = []
   this.blocks.push(new Range('fas fa-arrows-alt-h', 'Width', 'button-width', elem, {min: 100, max: 300, standart: 150}))
   this.blocks.push(new Range('fas fa-text-width', 'FontSize', 'buttonFontSize', elem, {min: 5, max: 50, standart: 14}))

   this.blocks.push(new Range('fab fa-cuttlefish', 'borderRadius', 'borderRadius', elem, {min: 0, max: 100, standart: 0}))
   this.blocks.push(new Color('fas fa-eye-dropper', 'FontColor', 'button-color', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BackgroundColor', 'background', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BorderColor', 'border', elem))

   settingsBlock.innerHTML = ''
   for (var i = 0; i < this.blocks.length; i++) {
      settingsBlock.appendChild(this.blocks[i].elem)
   }

}
