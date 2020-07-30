import React from "react";
import Axios from "axios";
import Search from "./Search";
import {
  render,
  screen,
  fireEvent,
  findAllByTestId,
  cleanup
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
jest.mock("axios");
// getBy
// queryBy
// findBy

afterAll(() => cleanup());
beforeAll(() => {
  Axios.get.mockImplementation(
    () =>
      new Promise(res => {
        res({
          data: {
            data: [
              {
                id: 1,
                email: "george.bluth@reqres.in",
                first_name: "George",
                last_name: "Bluth",
                avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              },
              {
                id: 2,
                email: "janet.weaver@reqres.in",
                first_name: "Janet",
                last_name: "Weaver",
                avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
              }
            ]
          }
        });
      })
  );
});

test("Render the search component", async () => {
  const { queryByText, findByText, queryByRole } = render(<Search />);
  expect(queryByText("Rendering complete!")).toBeNull();
  // fireEvent.change(queryByRole("textbox"), {
  //   target: { value: "Hi there peeps!" }
  // });
  await userEvent.type(queryByRole("textbox"), "Hi there peeps!");
  expect(await findByText("Rendering complete!")).toBeInTheDocument();
});

test("Trigger a prop call by clicking", async () => {
  const dummyOriginalFunction = jest.fn();
  const { getByTestId } = render(
    <Search doSomething={dummyOriginalFunction} />
  );
  fireEvent.click(getByTestId("clicker"));
  fireEvent.click(getByTestId("clicker"));
  expect(dummyOriginalFunction).toHaveBeenCalledTimes(2);
});

test("Fetch users", async () => {
  const { queryByTestId, findAllByTestId } = render(<Search />);
  expect(queryByTestId("list-element")).toBeNull();
  const listElements = await findAllByTestId("list-element");
  expect(listElements.length).toBe(2);
});
