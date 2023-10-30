// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

/**
 * проверка цифры или буквы
 * && (И)
 * ! (НЕ)
 * не пустая строка И длина >= 2 И строка не содержит " "
 */
describe("Проверка функции проверки имени пользователя", () => {
  test("В функцию передана пустая строка. Ожидаем False", () => {
    expect(nameIsValid("")).toBeFalsy();
  });

  test("В функцию передана строка c пробелом. Ожидаем False", () => {
    expect(nameIsValid(" ")).toBeFalsy();
    expect(nameIsValid("Alexey Polupanov")).toBeFalsy();
    expect(nameIsValid(" AlexeyPolupanov")).toBeFalsy();
    expect(nameIsValid("AlexeyPolupanov ")).toBeFalsy();
  });

  it("Граничные условия. Длина строки <2. Ожидаем False", () => {
    expect(nameIsValid("A")).toBeFalsy();
  });
  it("Граничные условия. Длина строки = 2 || >2. Ожидаем True", () => {
    expect(nameIsValid("Al")).toBeTruthy();
    expect(nameIsValid("Alexey")).toBeTruthy();
  });
  test("В функцию передано число. Ожидаем False", () => {
    expect(nameIsValid(34)).toBeFalsy();
  });
});

// Удаление пробелов из строки
describe("Проверка функции удаления пробелов из строки", () => {
  test("Проверка удаления пробелов из строки", () => {
    const text = "В функцию передана строка с пробелами";
    expect(text).toContain(" ");
    // expect(fullTrim(text)).toEqual("Вфункциюпереданочисло");
    expect(fullTrim(text)).not.toContain(" ");
  });

  test("В функцию передаем число. Ожидаем ошибку", () => {
    expect(() => fullTrim(5)).toThrow();
  });
});

// Подсчет суммы заказа
test.each`
  items       | expected
  ${[10, 10]} | ${100}
`("returns $expected", ({ items, expected }) => {
  expect(getTotal(items)).toBe(expected);
});
