    function space(str) {
        str = str.split('');
        return str.map(function(item, index){
            if(item == '-' || item == '_'){
            item = str[index+1].toUpperCase();
            str.splice(index + 1, 1);
            }
            return item;
        }).join('');
        }
    console.log(space('the-stealth-warrior'));