import { Link } from "react-router-dom";
import "./UsersStyles.scss";
import { UsersTable } from "./UsersTable";

const users = [
  {
    name: "Nicolas",
    email: "nicolas@gmail.com",
  },
  {
    name: "Pedro",
    email: "pedro@gmail.com",
  },
  {
    name: "Sofia",
    email: "sofia@gmail.com",
  },
  {
    name: "Julieta",
    email: "julieta@gmail.com",
  },
];

export const UsersList = () => {
  return (
    <div>
      <div className="return">
        <Link className="return__button" to="/backoffice/users/create">
          Regresar
        </Link>
      </div>

      <UsersTable users={users} />
    </div>
  );
};
