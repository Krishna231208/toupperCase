import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (word) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return '';
  };

  // Check the value of props.alert for debugging
  console.log('props.alert:', props.alert);

  return (
    props.alert ? (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {capitalize(props.alert.type)}: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    ):null
  );
}
