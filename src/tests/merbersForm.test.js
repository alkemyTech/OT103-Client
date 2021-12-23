import {
	act,
	fireEvent,
	prettyDOM,
	render,
	waitFor,
	screen,
	waitForElementToBeRemoved,
	cleanup,
} from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import MembersEdit from "../Components/Members/MembersEdit";
import axios from "axios";
import { server } from "./mocks/server.js";
import mockData from "./mocks/member.json";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Testing MembersForm", () => {
	beforeEach(() => {
		axios.get = jest.fn(() => Promise.resolve({ data: { data: mockData } }));
	});
	describe("Testing Create Member", () => {
		let componentRendered;
		let name;
		let description;
		beforeEach(async () => {
			await waitFor(() => {
				componentRendered = render(
					<MemoryRouter initialEntries={["/backoffice/members/create"]}>
						<Route path="/backoffice/members/create" component={MembersEdit} />
					</MemoryRouter>
				);
			});

			await waitFor(() => {
				name = componentRendered.getByPlaceholderText(/nuevo nombre/i);
				description = componentRendered.container.querySelector(".ck-content");
			});
		});

		test("should validate name input to be required", async () => {
			await waitFor(async () => {
				await fireEvent.change(name, { target: { value: "" } });
				await fireEvent.click(componentRendered.getByText("Editar"));
			});
			expect(screen.getByText("Porfavor ingrese el nombre")).toBeTruthy();
		});

		test("should validate name input to be +3 characters", async () => {
			console.log(description);
			await waitFor(async () => {
				await fireEvent.change(name, { target: { value: "aa" } });
				await fireEvent.click(componentRendered.getByText("Editar"));
			});
			expect(screen.getByText("Mínimo 4 caráctares")).toBeTruthy();
		});

		// test("should validate description input to be required", async () => {
		// 	description.innerHTML = "";
		// 	await waitFor(async () => {
		// 		await fireEvent.click(componentRendered.getByText("Editar"));
		// 	});
		// 	expect(screen.getByText("Porfavor ingrese una descripción")).toBeTruthy();
		// });
	});

	// describe("Testing Edit Member", () => {
	// 	let componentRendered;
	// 	beforeEach(async () => {
	// 		await act(async () => {
	// 			componentRendered = render(
	// 				<MemoryRouter initialEntries={["/backoffice/members/edit/315"]}>
	// 					<Route
	// 						path="/backoffice/members/edit/:id"
	// 						component={MembersEdit}
	// 					/>
	// 				</MemoryRouter>
	// 			);
	// 		});
	// 		await waitFor(() => {});
	// 	});

	// 	test("just render", () => {
	// 		const l = componentRendered.container.querySelector("[data-placeholder]");
	// 		// console.log(prettyDOM(l));
	// 	});
	// });
});
