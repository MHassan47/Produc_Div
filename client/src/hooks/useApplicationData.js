import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    users: {},
    projects: [],
    tasks: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/users/"),
      axios.get("http://localhost:8080/api/tasks/"),
      axios.get("http://localhost:8080/api/projects/"),
    ]).then((all) => {
      setState((prev) => {
        return {
          ...prev,
          users: all[0].data,
          tasks: all[1].data,
          projects: all[2].data,
        };
      });
    });
  }, []);

  return {
    state,
    setState,
  };


}
