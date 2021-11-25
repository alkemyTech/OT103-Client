import { render } from "@testing-library/react";
import CategoriesForm from "./CategoriesForm";

// TESTS KEEP FAILING BECAUSE OF THE CKEDITOR LIBRARY

describe("CategoryForm component renders", () => {
  test("withour prop", () => {
    render(<CategoriesForm />);
  });
});
