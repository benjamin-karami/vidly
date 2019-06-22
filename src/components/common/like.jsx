import React from "react";

const Like = props => {
  let classes = !props.liked ? "fa fa-heart-o" : "fa fa-heart";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
