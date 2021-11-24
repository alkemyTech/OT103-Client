import { categoryPutApiRequest } from "../../schemas/privateApi/categoryApiSchemas";

const modifyCategory = (categoryObject) => {
  console.log(categoryObject);
  return new Promise((resolve, reject) => {
    categoryPutApiRequest.validate(categoryObject).then();
  });
};

export { modifyCategory };
