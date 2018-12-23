const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Person';
    const text = 'A message';
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    const from = 'Person';
    const lat = 123;
    const lng = 321;
    const message = generateLocationMessage(from, lat, lng);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${lat},${lng}`
    });
  });
});
