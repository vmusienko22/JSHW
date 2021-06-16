'use strict';

function filterBy(arrayList, dataType) {
    let newArray = arrayList.filter(function(item) {
        return typeof (item) !== dataType ;
    });
    console.log(newArray);
    return newArray;
}
filterBy(['hello', 'world', 23, '23', null], 'string');