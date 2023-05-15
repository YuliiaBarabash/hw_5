const array = [];
let element;

do {
  element = prompt("Enter your element");

  if (element) {
    array.push(element);
  }
} while (element);

alert(array);

array.sort();

alert(array);

array.splice(2, 3);

alert(array);
