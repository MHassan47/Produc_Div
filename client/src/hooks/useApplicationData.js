import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [isFetching, setIsFetching] = useState(true);
  const [state, setState] = useState({
    users: {},
    projects: [],
    tasks: [],
    user: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      photo_url: "",
      role: "",
      auth: false,
    },
    users_to_tasks: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/users/", { withCredentials: true }),
      axios.get("http://localhost:8080/api/tasks/", { withCredentials: true }),
      axios.get("http://localhost:8080/api/projects/", {
        withCredentials: true,
      }),
      axios.get("http://localhost:8080/user", { withCredentials: true }),
      axios.get("http://localhost:8080/api/tasks/users_to_tasks", {
        withCredentials: true,
      }),
    ]).then((all) => {
      setState((prev) => {
        return {
          ...prev,
          users: all[0].data,
          tasks: all[1].data,
          projects: all[2].data,
          user: all[3].data,
          users_to_tasks: all[4].data,
        };
      });
      setIsFetching(false);
    });
  }, []);

  return {
    isFetching,
    state,
    setState,
  };
}
