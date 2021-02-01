export function isvalidUsername(str) {
  // const valid_map = ['admin', 'test']
  // return valid_map.indexOf(str.trim()) >= 0
  return str.trim().length>=3
}

/* 合法手机号*/
export function isvalidateTELE(textval) {
  const teleregex = /^1[0-9]{10,10}$/
  return teleregex.test(textval)
}

/* 合法密码*/
export function isvalidatePWD(textval) {
  const pwdregex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,18}$/
  return pwdregex.test(textval)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/* 数字类型及小数位*/
export function numberType(value, decimalPlaces) {
    if (isNaN(value)) {
        return value = null
    }
    if (value.indexOf('.') > 0) {
        console.log(decimalPlaces)
        value=value.slice(0, value.indexOf('.') + decimalPlaces)
        console.log(value)
        return value
    }
}

