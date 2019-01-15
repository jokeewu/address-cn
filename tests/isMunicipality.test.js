import assert from 'assert';
import isMunicipality from '../lib/isMunicipality';

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