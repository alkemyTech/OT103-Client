import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Router } from "react-router-dom";
import App from "../App";
import MembersEdit from "../Components/Members/MembersEdit";

describe("render membersForm", () => {
	test("it renders membersForm component", async () => {
		render();
		<MemoryRouter initialEntries={["/backoffice/members/create"]}>
			<Route path="/backoffice/members/create" render={MembersEdit} />
		</MemoryRouter>;

		screen.getByRole("heading", {
			name: /Members Edit Form/i,
		});
	});
});
