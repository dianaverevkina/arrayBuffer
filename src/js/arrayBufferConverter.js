export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
  }

  load(buffer) {
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < this.data.length; i++) { // eslint-disable-line
      bufferView[i] = this.data.charCodeAt(i);
    }

    this.bufferView = bufferView;
  }

  toString() {
    let dataToString = '';
    this.bufferView.forEach((code) => {
      dataToString += String.fromCharCode(code);
    });

    return dataToString;
  }
}
