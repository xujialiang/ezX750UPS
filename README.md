# ezX750UPS

## 树莓派配置

```
sudo raspi-config

```

选择 5 Interfacing Options

选择 I2C - Enable/Disable automatic loading

选择 "Yes" 


## 安装

```
npm install ezx750ups --save
```

## 使用

```
const EZX750 = require('ezx750ups');
let ezX750Mgr = EZX750(0x36);

// 获取电压
let vol = ezX750Mgr.getVoltage();
console.log('vol', vol);


let cap = ezX750Mgr.getCapacity();
console.log('cap', cap);

```

有技术问题可微信我

![wechat](./vx.jpeg)

