export const UsersTable = ({ users }) => {
  return (
    <div className="users__table__container">
      <table className="users__table">
        <thead>
          <tr className="users__table__rows">
            <th className="users__table__info">Name</th>
            <th className="users__table__info">Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {users?.map((user, id) => (
          <tbody key={id}>
            <tr className="users__table__rows">
              <td>{user.name || ""}</td>
              <td>{user.email || ""}</td>
              <td className="users__table__actions">
                <button className="users__table__actions__buttons">
                  Borrar
                </button>
                <button className="users__table__actions__buttons">
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
