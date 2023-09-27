import StringUtils from "./StringUtils";

export default class TbkValidationUtil {
    static validateCommerceCode(commerceCode){
        if (!StringUtils.hasLength(commerceCode, 12)){
            return "El código de comercio debe tener 12 digitos";
        }
        if (!StringUtils.isNumber(commerceCode)){
            return "El código de comercio debe ser un número";
        }
        if (!commerceCode.startsWith('5970')) {
            return "El código de comercio debe comenzar con 5970";
        }
        return null;
    }
    static validateApikey(apikey){
        if (!StringUtils.isNotBlankOrNull(apikey, 12)){
            return "El apikey no debe estar vacio o nulo";
        }
        return null;
    }
}

