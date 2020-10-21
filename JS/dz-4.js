 // Write code under this line
const StringBuilder = function(string) {
     this._value = string;  
     
     this.value = this._value;

     this.append = function (str) {
         this.value = `${this.value}${str}`
     };

     this.prepend = function (str) {
       this.value = `${str}${this.value}`

     };

     this.pad = function (str) {
        this.prepend(str), this.append(str)
     };


 
 }

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

