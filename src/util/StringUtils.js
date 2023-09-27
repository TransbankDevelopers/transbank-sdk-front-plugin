export default class StringUtils {
    static isNotBlankOrNull(str){
        if (str === null || str === undefined) {
            return false;
        }
        if (typeof str !== 'string') {
            return false; 
        }
        if (str.trim() === '') {
            return false; 
        }
        return true;
    }

    static hasLength(str, length){
        if (!StringUtils.isNotBlankOrNull(str)){
            return false;
        }
        if (str.trim().length !== length){
            return false;
        }
        return true;
    }

    static isNumber(str){
        if (!StringUtils.isNotBlankOrNull(str)){
            return false;
        }
        let pattern = /^[0-9]+$/;
        return pattern.test(str);
    }
}

