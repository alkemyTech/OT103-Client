import { modifyCategory, uploadCategory } from "./categoryApi";

const mockDataPut = {
  id: 1,
  name: "test1",
  description: "<h1>Un h1 por aca</h1>",
  image:
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
};

const mockDataPost = {
  name: "test1",
  description: "<h1>Un h1 por aca</h1>",
  image:
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
};

describe("POST", () => {
  test("dwdw", () => {
    expect(uploadCategory(mockDataPut)).rejects.toBeDefined();
  });

  test("uploads a string => expects reject to be defined", () => {
    expect(uploadCategory("de")).resolves.toBeDefined();
  });
  test("uploads an array => expects reject to be defined", () => {
    expect(uploadCategory([])).rejects.toBeDefined();
  });
  test("uploads an empty object => expects reject to be defined", () => {
    expect(uploadCategory({})).rejects.toBeDefined();
  });
  test("uploads an number => expects reject to be defined", () => {
    expect(uploadCategory(1)).rejects.toBeDefined();
  });

  test("uploads an empty object => expects reject to be defined", () => {
    expect(uploadCategory({})).rejects.toBeDefined();
  });

  test("uploads an empty object => expects required", () => {
    expect(uploadCategory({})).rejects.toMatch(/required/i);
  });
});

// describe("/categories", () => {
//   describe("PUT", () => {
//     test("Send valid data => expects to be defined", async () => {
//       mockDataPut.map(async (mock) => {
//         const result = await modifyCategory(mock);
//         expect(result).toBeDefined();
//       });
//     });

//     test("Send valid data => expects to have property 'sucess'", async () => {
//       mockDataPut.map(async (mock) => {
//         const result = await modifyCategory(mock);

//         expect(result).toHaveProperty("sucess");
//       });
//     });

//     test("Send incorrect format data => invalid id => expects error to be defined", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, id: "invalid id" })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toBeDefined();
//           });
//       });
//     });

//     test("Send incorrect format data => invalid id => expects error to have 'id'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, id: "invalid id" })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/id/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid id => expects error to have 'NaN'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, id: "invalid id" })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/NaN/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid name => expects error to have 'name'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, name: [] })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/name/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid name => expects error to have 'string'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, name: [] })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/name/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid name => expects error to have 'name'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, name: {} })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/name/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid description => expects error to have 'description'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, description: {} })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/description/i);
//           });
//       });
//     });

//     test("Send incorrect format data => invalid description => expects error to have 'string'", async () => {
//       mockDataPut.forEach((mock) => {
//         modifyCategory({ ...mock, description: [] })
//           .then(() => {})
//           .catch((err) => {
//             expect(err).toMatch(/string/i);
//           });
//       });
//     });
//   });
// });
// describe("POST", () => {
//   test("Send valid data => expects to be defined", async () => {
//     mockDataPut.map(async (mock) => {
//       const result = await uploadCategory(mock);
//       expect(result).toBeDefined();
//     });
//   });

//   test("Send valid data => expects to have property 'success'", async () => {
//     mockDataPut.map(async (mock) => {
//       // const result = await uploadCategory(mock);
//       // expect(result).toHaveProperty("success");
//       expect(uploadCategory(mock)).resolves.toHaveProperty("sfebwfu");
//     });
//   });

//   test("Send incorrect format data => invalid id => expects error to be defined", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, id: "invalid id" })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toBeDefined();
//         });
//     });
//   });

//   test("Send incorrect format data => invalid id => expects error to have 'id'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, id: "invalid id" })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/id/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid id => expects error to have 'NaN'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, id: "invalid id" })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/NaN/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid name => expects error to have 'name'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, name: [] })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/name/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid name => expects error to have 'string'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, name: [] })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/name/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid name => expects error to have 'name'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, name: {} })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/name/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid description => expects error to have 'description'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, description: {} })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/description/i);
//         });
//     });
//   });

//   test("Send incorrect format data => invalid description => expects error to have 'string'", async () => {
//     mockDataPut.forEach((mock) => {
//       uploadCategory({ ...mock, description: [] })
//         .then(() => {})
//         .catch((err) => {
//           expect(err).toMatch(/string/i);
//         });
//     });
//   });
// });
