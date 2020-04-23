const { maxSequence } = require ('../index');

describe('maxSequence', () => {

  it('should be 6', () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should be 0', () => {
    expect(maxSequence([])).toBe(0);
  });

  it('should be 4', () => {
    expect(maxSequence([1,1,1,1])).toBe(4);
  });

  it('should be 3', () => {
    expect(maxSequence([-2,1,1,1])).toBe(3);
  });

});
