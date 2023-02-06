import React from 'react';
import CourseGolItem from './CourseGolItem';

function CourseGolList(props) {
  return (
    <div className="w-3/4 mx-auto mt-12">
      <ul className="space-y-4">
        {props.item.map((goal) => (
          <CourseGolItem
            key={goal.id}
            id={goal.id}
            onDeleteId={props.onDeleteItem}
          >
            {goal.text}
          </CourseGolItem>
        ))}
      </ul>
    </div>
  );
}

export default CourseGolList;
