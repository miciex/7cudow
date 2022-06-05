import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Comment({ email, user, comment }) {
  return (
    <div className="comment">
      <h5>
        <FontAwesomeIcon icon={faUser} />
        {user}
      </h5>
      <span>komentarz: {comment}</span>
    </div>
  );
}
