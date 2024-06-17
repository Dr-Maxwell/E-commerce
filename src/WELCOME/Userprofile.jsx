/** @format */

import React from "react";
const Userprofile = (currentUser) => {
  //console.log(currentUser.user.providerData[0].displayName.split(" ")[0]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <div>
        <img
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          src={currentUser.user.photoURL}
          alt="Image"
        />
      </div>
      <div
        style={{
          textTransform: "uppercase",
          fontSize: "0.8rem",
        }}
      >
        {currentUser.user.providerData[0].displayName
          ? currentUser.user.providerData[0].displayName
          : currentUser.user.email}
      </div>
    </div>
  );
};

export default Userprofile;
