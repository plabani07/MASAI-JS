const FunTechLibrary = {
  
    customSplice: function(arr, start, deleteCount, ...items) {
        const result = [];
        for (let i = 0; i < start; i++) {
            result.push(arr[i]);
        }
        for (let i = 0; i < items.length; i++) {
            result.push(items[i]);
        }
        for (let i = start + deleteCount; i < arr.length; i++) {
            result.push(arr[i]);
        }
        return result;
    },
    
    customSlice: function(arr, start, end) {
        const result = [];
        for (let i = start; i < (end || arr.length); i++) {
            result.push(arr[i]);
        }
        return result;
    },

    customIncludes: function(arr, element) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return true;
            }
        }
        return false;
    },

    customToLowerCase: function(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) { 
                result += String.fromCharCode(code + 32);
            } else {
                result += str[i];
            }
        }
        return result;
    },

    customToUpperCase: function(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (code >= 97 && code <= 122) { 
                result += String.fromCharCode(code - 32);
            } else {
                result += str[i];
            }
        }
        return result;
    },

    customPush: function(arr, ...items) {
        for (let i = 0; i < items.length; i++) {
            arr[arr.length] = items[i];
        }
        return arr.length;
    },

    customPop: function(arr) {
        if (arr.length === 0) return undefined;
        const lastItem = arr[arr.length - 1];
        arr.length = arr.length - 1;
        return lastItem;
    }
};

const myArray = [1, 2, 3, 4, 5];

console.log(FunTechLibrary.customSplice(myArray, 2, 2, "a", "b", "c")); 

console.log(FunTechLibrary.customSlice(myArray, 1, 4)); 

console.log(FunTechLibrary.customIncludes(myArray, 3)); 

console.log(FunTechLibrary.customToLowerCase("Hello World")); 

console.log(FunTechLibrary.customToUpperCase("hello world")); 

console.log(FunTechLibrary.customPush(myArray, 6, 7)); 

console.log(FunTechLibrary.customPop(myArray)); 