import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Loading() {
  return (
    <main className="mainLoading">
      <div className="loading container">
        <FontAwesomeIcon icon={faCircleNotch} className="loading__icon" />
      </div>
    </main>
  );
}
