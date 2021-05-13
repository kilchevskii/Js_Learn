// Попрактикуемся в цепочках!

// Ваша задача - создать объект chainMaker, который создает цепочки. Готовая цепочка представляет собой строку и выглядит так: '(значение1) (значение2) (значение3)'. В ChainMaker есть несколько методов для создания цепочек и их изменения:

// getLength возвращает текущую длину цепочки в виде числа;
// addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
// removeLink (position) удаляет звено цепи в указанной позиции;
// reverseChain переворачивает цепочку;
// finishChain завершает цепочку и возвращает ее.

// Методы addLink, reverseChain и removeLink объединяются в цепочку, а другие - нет. Если addLink вызывается без аргументов, он добавляет в цепочку пустую ссылку ('()'). Если removeLink принимает недопустимую позицию (например, не число или дробное число, или соответствует несуществующей ссылке), он должен выдать ошибку. После вызова метода finishChain существующую цепочку необходимо удалить, как если бы возникла ошибка.

// Например:

// chainMaker.addLink (1) .addLink (2) .addLink (3) .finishChain () => '(1) ~~ (2) ~~ (3)'

// chainMaker.addLink (1) .addLink (2) .removeLink (1) .addLink (3) .finishChain () => '(2) ~~ (3)'

// chainMaker.addLink (1) .addLink (2) .reverseChain (). addLink (3) .finishChain () => '(2) ~~ (1) ~~ (3)'

let chainMaker = {
   step: [],
   addLink(value = " ") {
     this.step.push(value);
     return this;
   },
   removeLink(position) {
      if (position>this.step.length-1 || typeof position != "number") {
         console.log("Ошибка, вы написали ересь!"); 
      }
      this.step.splice(position,1);
      return this;
    },
   getLength() {
      return this.step.length;
   },
   reverseChain() {
      this.step.reverse();
      return this
   },
   finishChain() { 
     return this.step.join(' ~~ ');
   },
   End() {
     this.step.length = 0;
     return this
   }   
};

console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain().End())
