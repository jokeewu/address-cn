const assert = require('assert');

const decode = require('../lib/decode').default;
const isMunicipality = require('../lib/isMunicipality').default;

// 编码解析
describe('decode()', function() {
  it('110000 => [\'北京\']', function() {
    assert.equal(decode('110000').join(','), '北京');
  });

  it('110101 => [\'北京,北京市,东城区\']', function() {
    assert.equal(decode('110101').join(','), '北京,北京市,东城区');
  });

  it('140100 => [\'山西省,太原市\']', function() {
    assert.equal(decode('140100').join(','), '山西省,太原市');
  });
});

// 是否是直辖市
describe('isMunicipality()', function() {
  it('110000 => true', function() {
    assert.equal(isMunicipality('110000'), true);
  });

  it('北京市 => true', function() {
    assert.equal(isMunicipality('北京市'), true);
  });

  it('成都市 => false', function() {
    assert.equal(isMunicipality('成都市'), false);
  });
});