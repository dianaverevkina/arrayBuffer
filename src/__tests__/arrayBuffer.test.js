import ArrayBufferConverter from '../js/arrayBufferConverter';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
const bufferConverter = new ArrayBufferConverter(data);
const buffer = new ArrayBuffer(data.length * 2);

test('Loading data', () => {
  bufferConverter.load(buffer);
  const expected = new Uint16Array([
    123, 34, 100, 97, 116, 97, 34, 58, 123, 34,
    117, 115, 101, 114, 34, 58, 123, 34, 105, 100,
    34, 58, 49, 44, 34, 110, 97, 109, 101, 34,
    58, 34, 72, 105, 116, 109, 97, 110, 34, 44,
    34, 108, 101, 118, 101, 108, 34, 58, 49, 48,
    125, 125, 125,
  ]);

  expect(bufferConverter.bufferView).toEqual(expected);
});

test('Data of ArrayBuffer to String', () => {
  expect(bufferConverter.toString()).toBe(data);
});
