const multiCheckedToggle = (children, checked) => {
    let hasChild = children.reduce((accu, current) => current.children ? [...accu, ...current.children] : accu, []);
    let array = [];
    if(hasChild.length) {
        multiCheckedToggle(hasChild, checked);
        console.log(hasChild);
    } else {
        array = children.reduce((accu, current) => [...accu, current.value],[]);
        let includes = array.every(function (e) {
            return checked.includes(e);
        });

        if(!includes) {
            array = [...checked, ...array];
            let newArray = [];
            
            array.forEach(item => {
                if(newArray.indexOf(item) === -1) {
                    newArray.push(item);
                }
            });
            onChange([...newArray]);
        } else {
            for(var i = 0; i < array.length; i++) {
                checked.splice(checked.indexOf(array[i]), 1);
            }
            onChange([...checked])
        }
    }  
}