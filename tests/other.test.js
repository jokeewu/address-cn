import assert from 'assert';
import addressData from '../lib/address-data';

describe('省+直辖市+自治区+特别行政区', function() {
  it('省+直辖市+自治区+特别行政区 => 34', function() {
    assert.equal(addressData.length, 34);
  });
});
