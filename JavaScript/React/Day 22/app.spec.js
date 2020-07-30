const { constructTodo, constructElement, createTodo } = require("./utils");
const pupeteer = require("puppeteer");

describe("Unit tests", () => {
  test("It should create a new todo object", () => {
    const todo = constructTodo("Lorem ipsum", "Dolor ect instru");
    expect(todo).toEqual({ title: "Lorem ipsum", body: "Dolor ect instru" });
  });

  test("It should return undefined for empty values", () => {
    const todo = constructTodo("", "Dolor ect instru");
    expect(todo).toBeUndefined();
  });

  test("It should create a HTML element in string", () => {
    const todoListItem = constructElement({
      title: "Lorem ipsum",
      body: "Dolor ect in"
    });

    expect(todoListItem.trim()).toBe(
      `<li><p>Lorem ipsum</p><p>Dolor ect in</p></li>`
    );
  });
});

describe("Integration tests", () => {
  test("Create a Todo", () => {
    const todoListItem = createTodo("Todo 1", "Body 1");
    expect(todoListItem).toBe(`<li><p>Todo 1</p><p>Body 1</p></li>`);
  });
});

describe("E2E tests", () => {
  test("Check a new element is created", async done => {
    const browser = await pupeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:1234");
    await page.type(".create-form input[name='title']", "Title 3");
    await page.type(".create-form input[name='body']", "Body 3");
    await page.click(".create-form input[type='submit']");
    const todo = await page.$eval(".list li", el => {
      const [title, body] = el.querySelectorAll("p");
      return { title: title.textContent, body: body.textContent };
    });
    expect(todo).toEqual({ title: "Title 3", body: "Body 3" });
    await browser.close();
    done();
  });
});
