import addressData from './address-data';
import isMunicipality from './isMunicipality';

/**
 * 地址编码解析为详细地址
 * 
 * @param {string} code 
 * @returns {array}
 * @example
 * 
 * decode('110000')
 * // => ['北京']
 * decode('110101')
 * // => ['北京', '北京市', '东城区']
 */
function decode(code) {
  if (!code || !(/^\d{6}$/.test(code))) {
    return [];
  }

  const result = [];
  const provinceCode = code.replace(/\d{4}$/, '0000');
  let cityCode = code.replace(/\d{2}$/, '00');
  // 直辖市省代码和市代码一样
  if (isMunicipality(code)) {
    cityCode = code;
  }
  const regionCode = code;

  // 省查找
  const province = addressData.find(item => item.value === provinceCode);
  let cities = [];

  if (province) {
    result.push(province.label);

    if (/0{4}$/.test(code)) {
      return result;
    }

    if (Array.isArray(province.children)) {
      cities = province.children;
    }
  } else {
    return result;
  }

  // 市查找
  const city = cities.find(item => item.value === cityCode);
  let regions = [];

  if (city) {
    result.push(city.label);

    if (/0{2}$/.test(code)) {
      return result;
    }

    if (Array.isArray(city.children)) {
      regions = city.children;
    }
  } else {
    return result;
  }

  // 区查找
  const region = regions.find(item => item.value === regionCode);

  if (region) {
    result.push(region.label);
  }

  return result;
}

export default decode;