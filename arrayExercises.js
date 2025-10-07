/**
 * 1) Translate dashes to camel case
 * e.g. camelize("background-color") == 'backgroundColor';
 */
function camelize(str){
    if(str == null || str.length == 0){
        return;
    }
    let array = str.split("-");
    let mapped = array.slice(1).map(capitalize);
    mapped.unshift(array[0]);
    return mapped.join("");

}
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(camelize("background-color-works-well"));