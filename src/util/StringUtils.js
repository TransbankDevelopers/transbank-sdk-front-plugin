export default class StringUtils {

    static isBlankOrNull(str){
        return !str || /^\s*$/.test(str);
    }

    static isNotBlankOrNull(str){
        return !StringUtils.isBlankOrNull(str);
    }

    static hasLength(str, length){
        if (StringUtils.isBlankOrNull(str)){
            return false;
        }
        if (str.trim().length !== length){
            return false;
        }
        return true;
    }

    static isNumber(str){
        if (StringUtils.isBlankOrNull(str)){
            return false;
        }
        let pattern = /^[0-9]+$/;
        return pattern.test(str);
    }
}

