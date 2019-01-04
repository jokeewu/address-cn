/**
 * 是否为直辖市
 * 
 * @param {string} code 城市编码/城市名称
 * @returns {boolean}
 * @example
 * 
 * isMunicipality('110000')
 * // => true
 * isMunicipality('北京')
 * // => true
 */
function isMunicipality(code) {
  return /^11|北京|12|天津|31|上海|50|重庆/.test(code);
}

export default isMunicipality;