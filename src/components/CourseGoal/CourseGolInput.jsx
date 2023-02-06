import React, { useState } from "react";

function CourseGolInput(props) {
  const [goalInputValue, setGoalInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid(false);
    }
    setIsValid(true);
    setGoalInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (goalInputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    props.onAddGoal(goalInputValue);
    setGoalInputValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="w-2/3 shadow-[0_8px_60px_0px_rgba(0,0,0,0.3)] p-8 rounded-lg mx-auto">
        <div className="">
          <label
            className={`text-xl  font-semibold mb-3 block ${
              !isValid ? 'text-red-800' : 'text-gray-800'
            }`}
          >
            Course Goal
          </label>

          <input
            value={goalInputValue}
            onChange={goalInputHandler}
            className={`w-full h-10 border border-solid focus:outline-none px-4 text-base font-medium text-gray-800 rounded ${
              !isValid ? 'border-red-800' : 'border-primary/50'
            } `}
            type="text"
          />

          {!isValid ? (
            <p className="bg-red-800 text-white text-sm font-medium mt-2 px-2 p-1 rounded">
              Please enter some feedback text
            </p>
          ) : (
            ''
          )}
        </div>
        <button className="bg-primary rounded text-lg text-white font-semibold px-10 py-2 mt-5">
          Add Goal
        </button>
      </div>
    </form>
  );
}

export default CourseGolInput;
