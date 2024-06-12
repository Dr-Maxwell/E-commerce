/** @format */

import React from "react";
const Userprofile = (currentUser) => {
  console.log(currentUser);
  return (
    <div
      style={{
        dispay: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img
          style={{ height: "40px", width: "40px" }}
          src={currentUser.user.photoUrl}
          alt="Image"
        />
      </div>
      <div>{currentUser.user.email}</div>
    </div>
  );
};

export default Userprofile;
