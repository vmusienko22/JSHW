'use strict';

function showList(list) {
    let array = [];
    let newArray = [];
    let finalArray = [];
    function accepting(theObject) {

        for (let key in theObject) {
            if (theObject[key] != null && typeof (theObject[key]) == 'object') {
                accepting(theObject[key]);
            } else {

                array.push(theObject[key]);
                newArray = array.map(element => `<li>${element}</li>`);
                finalArray = newArray.join('');
                document.body.children[2].innerHTML = finalArray;
            }
        }
    }
    accepting(list);
}

showList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

