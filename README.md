# address-cn

提供中国省市区编码数据及提供查询解析操作

## 使用

```shell
$ npm install --save address-cn
```

### decode(addressCode)

解析地址编码到具体地址

```javascript
import { decode } from 'address-cn/decode';

decode('110000');
// => ['北京市']

decode('110101');
// => ['北京市,东城区']
```

### isMunicipality(addressCode|addressName)

判断传入的是否为直辖市编码或名称

```javascript
import { isMunicipality } from 'address-cn';

isMunicipality('110000')
// => true

isMunicipality('北京市')
// => true

isMunicipality('成都市')
// => false
```