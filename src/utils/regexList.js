const regex = {
    NAME_REGEX: /^[a-zA-Z ]+$/,
    EMAIL_REGEX_WITH_EMPTY: /^$|^(?=.*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})/,
    MOBILE_NUMBER_WITH_COUNTRY_CODE_REGEX: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    PASSWORD_REGEX: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
    DIGIT_REGEX: /^\d*$/,
    ALPHA: /^[a-zA-Z ]*$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-])[A-Za-z\d|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-]{8,16}$/,
    ALPHA_NEMERIC: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9 ]*$/,
    ADDRESS: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&,() ]*$/,
    GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    PPOSITIVE_INTEGER: /^[1-9]\d*$/,
    ZIP_CODE: /^\d{5}(?:\d{2})?$/,
    MOBIILE:/^[1-9][0-9]{4,14}$/
}
export default regex