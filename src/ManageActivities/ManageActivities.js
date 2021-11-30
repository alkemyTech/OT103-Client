import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageActivities = () => {
  const [activities, setActivities] = useState([]);

  const handleEditActivity = () => {
    console.log("editing");
  };

  const handleDeleteActivity = () => {
    console.log("deleting");
  };

  useEffect(() => {
    axios
      .get("http://ongapi.alkemy.org/api/activities")
      .then((response) => setActivities(response.data.data));
  }, []);

  return (
    <div>
      <Link to="/backoffice/activities/create">Create New Activity</Link>
      {activities.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>created At</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => {
              return (
                <tr key={activity.id}>
                  <td>{activity.name}</td>
                  <td>
                    <img
                      src={activity.image || ""}
                      alt="descriptive"
                      onError={(e) => {
                        e.target.src =
                          "https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
                      }}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>{activity.created_at}</td>
                  <td>
                    <button onClick={handleEditActivity}>Edit</button>
                    <button onClick={handleDeleteActivity}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ManageActivities;
