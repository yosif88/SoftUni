function extensibleObject() {
    let parentObj = {};
    let childObj = Object.create(parentObj);
    
    childObj.extend = function (obj) {
    
        let objArray = Object.entries(obj);
    
        for (let [key, value] of objArray) {
            if (typeof value === 'function'){
                parentObj[key] = value;
            }else{
                childObj[key] = value;
            }
        }
    }
    return childObj;
}