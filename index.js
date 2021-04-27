const struct = require('python-struct');
const i2c = require('i2c-bus');

class ezx750ups {
    constructor(address=0x36){
        this.address = address;
    }

    getVoltage(busNum=1){
        let rawData = i2c.openSync(busNum).readWordSync(this.address, 0x2);
        let data = this._readVoltage(rawData);
        return data;
    }

    getCapacity(busNum=1){
        let rawData = i2c.openSync(busNum).readWordSync(this.address, 0x4);
        let data = this._readVoltage(rawData);
        return data;
    }

    _readVoltage(rawData){
        console.log('rawData', rawData);
        let packData = struct.pack(">H", rawData);
        console.log('packData', packData);
        let unpackData = struct.unpack("<H", packData);
        console.log('unpackData', unpackData[0]);
        let vol = unpackData[0]*1.25/1000/16;
        return vol;
    }

    _readCapacity(rawData){
        let packData = struct.pack(">H", rawData);
        console.log('packData', packData);
        let unpackData = struct.unpack("<H", packData);
        console.log('unpackData', unpackData[0]);
        let cap = unpackData[0]/256;
        return cap;
    }
}
module.exports = ezx750ups;