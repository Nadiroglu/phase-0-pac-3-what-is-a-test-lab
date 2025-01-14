const name = "Susan";
const height = 39;

describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeMoreThan(0)
      expect(height).toBeLessThan(40);
    });
  });

const message = `${name} is ${height} inches tall`;
module.exports = {name, height, message};