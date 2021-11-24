import React from "react";
import { render } from "@testing-library/react";
import CategoriesForm from "./CategoriesForm";

const mockData = {
  id: 1,
  name: "test",
  description: "<h1>TEST h1</h1>",
  image:
    "https://soygon.com/wp-content/uploads/2019/03/soy-multipotencial-test.jpg",
};

try {
  const { container, getByText } = render(<CategoriesForm />);
} catch (e) {
  console.log(e);
}
describe("Renders OK", () => {
  // const componentWithProp = render(<CategoriesForm category={mockData} />);
  test("Renders without the object prop", () => {
    // expect(getByText(/create/gi)).toBeDefined();
  });
});
