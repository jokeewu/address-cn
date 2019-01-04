# address-cn

中国省市区国家编码数据及提供查询操作

## 安装使用

```shell
$ npm install --save address-cn
```

## 方法

### decode(<string>)

解析地址编码到具体地址

```javascript
decode('110000');
// => ['北京']

decode('110101');
// => ['北京,北京市,东城区']
```

### isMunicipality(<string>)

判断传入的是否为直辖市编码或名称

```javascript
isMunicipality('110000')
// => true

isMunicipality('北京市')
// => true

isMunicipality('成都市')
// => false
```