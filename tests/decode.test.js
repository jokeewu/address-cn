import assert from 'assert';
import decode from '../lib/decode';

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