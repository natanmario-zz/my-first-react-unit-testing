import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(
      <List initialItems={["Natan", "Eros", "Gustavo"]} />
    );

    expect(getByText("Natan")).toBeInTheDocument();
    expect(getByText("Eros")).toBeInTheDocument();
    expect(getByText("Gustavo")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText("Novo nome");
    const addButton = getByText("Adicionar");

    await userEvent.type(inputElement, "Vitor");
    await userEvent.click(addButton);

    expect(getByText("Vitor")).toBeInTheDocument();
  });

  it("should be able to remove item to the list", async () => {
    const { getAllByText, queryByText, debug } = render(
      <List initialItems={["Natan"]} />
    );

    const removeButton = getAllByText("Remover")[0];
    await userEvent.click(removeButton);

    debug();

    expect(queryByText("Natan")).not.toBeInTheDocument();
  });
});
