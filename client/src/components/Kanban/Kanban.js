import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import axios from "axios";
import Card from "../Task/Card";
import Form from "../Task/Form";
import "./Kanban.css";
import { IoIosAdd } from "react-icons/io";
import { IoRemoveSharp } from "react-icons/io5";

const Kanban = ({
  state,
  setState,
  currentProject,
  setCurrentProject,
  updateCard,
  addUserToCard,
}) => {
 
  const [columns, setColumns] = useState(["To Do", "In Progress", "Complete"]);
  const [currentColumn, setCurrentColumn] = useState("");
  const [newCardToDo, setNewCardToDo] = useState(false);
  const [newCardInProgress, setNewCardInProgress] = useState(false);
  const [newCardComplete, setNewCardComplete] = useState(false);

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

  const newTask = (element) => {
    // setNewCard(true);
    console.log(element);
    setCurrentColumn(element);
    if (element === "To Do") {
      // if ("To Do" === element) return <Form />;
      setNewCardToDo((prev) => !prev);
      console.log(element);
    } else if (element === "In Progress") {
      setNewCardInProgress((prev) => !prev);

      console.log(element);
    } else if (element === "Complete") {
      setNewCardComplete((prev) => !prev);
      console.log(element);
    }
  };

  return (
    <div className="kanban_container">
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="kanban">
            {columns.map((element) => (
              <Droppable key={element} droppableId={element}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className="kanban__section"
                    ref={provided.innerRef}
                  >
                    <div className="kanban__section__title">
                      {element}
                      <div className="kanban__section__count">
                        {
                          state.tasks.filter(
                            (task) =>
                              task.col === element &&
                              task.project_id === currentProject
                          ).length
                        }
                      </div>
                      {newCardToDo || newCardInProgress || newCardComplete ? (
                        <div className="kanban__section__add">
                          <IoRemoveSharp
                            onClick={() => {
                              console.log(currentProject);
                              setNewCardToDo(false);
                              setNewCardInProgress(false);
                              setNewCardComplete(false);
                            }}
                          />
                        </div>
                      ) : (
                        <div className="kanban__section__add">
                          <IoIosAdd
                            onClick={
                              () => newTask(element)
                            }
                          />
                        </div>
                      )}
                    </div>
                    <div className="kanban__section__content">
                      <div className="newCard-form" id={element}>
                        {element === "To Do" && newCardToDo && (
                          <Form
                            state={state}
                            setState={setState}
                            currentColumn={element}
                            newTask={newTask}
                            currentProject={currentProject}
                          />
                        )}

                        {element === "In Progress" && newCardInProgress && (
                          <Form
                            state={state}
                            setState={setState}
                            currentColumn={element}
                            newTask={newTask}
                            currentProject={currentProject}
                          />
                        )}

                        {element === "Complete" && newCardComplete && (
                          <Form
                            state={state}
                            setState={setState}
                            currentColumn={element}
                            newTask={newTask}
                            currentProject={currentProject}
                          />
                        )}
                      </div>
                      {state.tasks.map((task, index) => {
                        if (
                          task.col === element &&
                          task.project_id === currentProject
                        )
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
                                  <Card
                                    key={task.id}
                                    state={state}
                                    setState={setState}
                                    task={task}
                                    updateCard={updateCard}
                                    addUserToCard={addUserToCard}
                                  >
                                    {task.name}
                                  </Card>
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
      </section>
    </div>
  );
};

export default Kanban;
