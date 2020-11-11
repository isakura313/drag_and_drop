// Пришло время получить немного элементов, с которыми мы можем работать
let p1 = document.getElementById("p1"); // получаем у нас целевой элемент
let target = document.getElementById("target"); // получаем какой -то элемент, на который мы можем быть нацелены



function dragstart_handler(ev) {
    console.log("dragStart"); // готов стать обработчиком вашей хуйни
    ev.currentTarget.style.border = "dashed"; // меняем стиль, чтобы пользователю было понятно, что происходит
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.effectAllowed = "move";  // что с ним можно сделать
    // Add the target element's id to the data transfer object

}

function dragover_handler(ev) {
    console.log("dragOver"); // устанавливается на наш целевой элемент, в который мы можем засунуть нашу карту
    ev.currentTarget.style.background = "lightblue"; // меняем стиль
    ev.preventDefault(); // отключаем дальнейшей всплытие события
}
    // }


function drop_handler(ev) {
    console.log("Drop"); // роняем нашу карточку
    ev.preventDefault(); // отключаем дефолтные события
    // Get the id of drag source element (that was added to the drag data
    // payload by the dragstart event handler)
    const id = ev.dataTransfer.getData("text");
    // Only Move the element if the source and destination ids are both "move"
    if (id === "p1" && ev.target.id === "target") {// если все прошло как нужно, тогда мы добавляем
        ev.target.appendChild(document.getElementById(id));
    }
    // Copy the element if the source and destination ids are both "copy"
}
function dragend_handler(ev) {
    console.log("dragEnd");
    // Restore source's border
    ev.target.style.border = "solid black";

}



p1.ondragstart = (ev) =>{
    dragstart_handler(ev)
}
p1.ondragend = (ev) =>{
    dragend_handler(ev)
}
target.ondrop = (ev) =>{
    drop_handler(ev)
}
target.ondragover = (ev)=>{
    dragover_handler(ev);
}
