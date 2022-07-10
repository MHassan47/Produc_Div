import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import axios from "axios";
import Card from "../Task/Card";
import "./Kanban.css";

// const test = [
//   { id: 1, name: "one" },
//   { id: 2, name: "two" },
// ];

const Kanban = (props) => {
  const state = props.state;
  const setState = props.setState;
  const [column, setColumn] = useState(["To Do", "In Progress", "Complete"]);
  // const [project, setProject] = useState(1);

  const onDragEnd = (result) => {
    console.log("-------iiii", result);
    const destination = result.destination;
    const sourceIndex = result.source.index;
    const col = result.destination.droppableId;
    console.log(typeof col);
    const task_id = Number(result.draggableId);

    const items = state.tasks.map((task) => {
      if (task.id === task_id) {
        return { ...task, col };
      } else {
        return task;
      }
    });
    // console.log("??????", items);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    return axios
      .put(`http://localhost:8080/api/tasks/move/${task_id}`, { col: col })
      .then(setState({ ...state, tasks: items }))
      .catch((error) => console.log(error));

    console.log("dragged item");
  };
  // console.log("UPDATED STATE", state);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {column.map((element) => (
          <Droppable key={element} droppableId={element}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="kanban__section"
                ref={provided.innerRef}
              >
                <div className="kanban__section__title">{element}</div>
                <div className="kanban__section__content">
                  {state.tasks.map((task, index) => {
                    if (task.col === element && task.project_id === 1)
                      return (
                        <Draggable
                          key={task.id.toString()}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                opacity: snapshot.isDragging ? "0.5" : "1",
                              }}
                            >
                              <Card>{task.name}</Card>
                            </div>
                          )}
                        </Draggable>
                      );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
