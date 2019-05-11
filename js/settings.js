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


function Select(img, text, html, style, form) {

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
   this.blocks.push(new Select('fas fa-font', 'FontFamily', '<select><option>Arial</option><option>Times New Roman</option></select>', 'FontFamily', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'FontColor', 'color', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BackgroundColor', 'background', elem))
   this.blocks.push(new Color('fas fa-eye-dropper', 'BorderColor', 'border', elem))

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
