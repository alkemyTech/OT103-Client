import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import MembersEdit from "../Components/Members/MembersEdit";
import axios from "axios";
import { server } from "./mocks/server.js";

const mockData = {
	id: 315,
	name: "Mockeado",
	image: "http://ongapi.alkemy.org/storage/ioDDmYuyWp.gif",
	description: "lorem ipsu dolor sit amet",
	facebookUrl: "string",
	linkedinUrl: "string",
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
	axios.get = jest.fn(() => Promise.resolve({ data: { data: mockData } }));
});

describe("Testing MembersForm", () => {
	// test("it displays loading while fetching user data", async () => {
	// 	await act(async () => {
	// 		render(
	// 			<MemoryRouter initialEntries={["/backoffice/members/edit/315"]}>
	// 				<Route path="/backoffice/members/edit/:id" component={MembersEdit} />
	// 			</MemoryRouter>
	// 		);
	// 		screen.getByText("Loading...");
	// 	});
	// });
	// test("removes text 'Loading...' after fetching member", async () => {
	// 	await act(async () => {
	// 		render(
	// 			<MemoryRouter initialEntries={["/backoffice/members/edit/315"]}>
	// 				<Route path="/backoffice/members/edit/:id" component={MembersEdit} />
	// 			</MemoryRouter>
	// 		);
	// 	});
	// 	await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
	// });

	test("render form fields", async () => {
		await act(async () => {
			const rendered = render(
				<MemoryRouter initialEntries={["/backoffice/members/edit/315"]}>
					<Route path="/backoffice/members/edit/:id" component={MembersEdit} />
				</MemoryRouter>
			);

			const p = rendered.container.querySelector(".ck-placeholder");
			console.log(p);
		});

		// expect(screen.getByPlaceholderText(/nuevo nombre/i)).toBeInTheDocument();
	});
});
