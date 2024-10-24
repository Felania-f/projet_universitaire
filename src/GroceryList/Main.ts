import { ListType } from "./ListType";
// import { List } from "./List";
import { ListCourse } from "./ListCourse";

// let list: List = new List("Dodotr", "9", ListType.LEGUME);
let todo = new ListCourse();
todo.addGrocery("Pattes", "3", ListType.LEGUME)
todo.addGrocery("Patte", "3", ListType.LEGUME)

// console.log(list.display())
console.log(todo.display())


