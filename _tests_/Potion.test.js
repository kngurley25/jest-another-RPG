const Potion = require("../lib/Potion.js");

// check that the Potion object will have both name and value
test("creates a health potion object", () => {
    const potion = new Potion("health");

    expect(potion.name).toBe("health");
    expect(potion.value).toEqual(expect.any(Number));
});

test("creates a random potion object", () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});