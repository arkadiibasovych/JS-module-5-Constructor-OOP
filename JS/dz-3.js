 // Write code under this line
const Storage = function (items) {
    this.items = items;

     
    this.addItem = function (item) {
      this.items.push(item);  
    };

    this.removeItem = function (item) {
        for (let i = 0; i < this.items.length; i += 1) {
           

            if (this.items[i] === item) {
                
                return this.items.splice(i, 1);
            }
        }
        
        
    };

    this.getItems = function () {
       return this.items; 
    };


  }

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];



const storage = new Storage(goods);



console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

