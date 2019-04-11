
// sacar el contenido del <title></title>-->
let title = document.querySelector("title");
console.log(title);
// >enlaces que su title acabe en word  -->
let t2 = document.querySelectorAll("a[title$='world']");
console.log(t2);