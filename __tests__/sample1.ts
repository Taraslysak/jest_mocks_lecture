// Test Suite
describe("Sample suit 1", () => {
  // Fixtures
  beforeAll(() => {
    console.log("This code is called before all tests");
  });
  beforeEach(() => {
    console.log("This code is called before each test");
  });

  // Tear-downs
  afterEach(() => {
    console.log("This code is called after each test");
  });
  afterAll(() => {
    console.log("This code is called before all tests");
  });

  // Tests
  test("should make a sample test1", () => {
    console.log("Test 1 called");

    expect(true).toBe(true);
  });

  test("should make a sample test2", () => {
    console.log("Test 2 called");
    expect(true).toBe(true);
  });
});
