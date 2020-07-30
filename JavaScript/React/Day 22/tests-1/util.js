function expect(originalValue) {
  return {
    toBe: expectedValue => {
      if (originalValue !== expectedValue) {
        throw new Error(
          `Expected value is ${expectedValue}. But I received ${originalValue}`
        );
      }
    }
  };
}

function test(statement, callback) {
  try {
    console.log(`Evaluating ${statement}`);
    callback();
    console.log(`TEST PASSED :)`);
  } catch (err) {
    console.error(`X TEST FAILED: `, err.message);
  }
}

module.exports = { expect, test };
