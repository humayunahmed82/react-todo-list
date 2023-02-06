import React, { useState } from "react";
import CourseGolInput from "./components/CourseGoal/CourseGolInput";
import CourseGolList from "./components/CourseGoal/CourseGolList";

function App(props) {
  const [courseGoal, setCourseGoal] = useState([
    { text: "Do all Eixrcises!", id: "1" },
    { text: "Finish the course", id: "2" },
  ]);

  const addCourseHandler = (enteredText) => {
    setCourseGoal((prevGoals) => {
      const updateGoal = [...prevGoals];
      updateGoal.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updateGoal;
    });
  };

  const DeleteHandler = (goalId) => {
    const deleteGoals = courseGoal.filter((deleted) => deleted.id !== goalId);
    setCourseGoal(deleteGoals);
  };

  return (
    <div className="container py-10">
      <div className="">
        <CourseGolInput onAddGoal={addCourseHandler} />
      </div>
      <div className="">
        <CourseGolList item={courseGoal} onDeleteItem={DeleteHandler} />
      </div>
    </div>
  );
}

export default App;
