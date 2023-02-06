import React from 'react';

function CourseGolItem(props) {
  const DeleteItemHandler = () => {
    props.onDeleteId(props.id);
  };

  return (
    <li
      onClick={DeleteItemHandler}
      className="text-xl text-white bg-primary px-7 py-3 shadow font-semibold"
    >
      {props.children}
    </li>
  );
}

export default CourseGolItem;
