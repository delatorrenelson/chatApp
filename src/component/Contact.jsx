import React from "react";

export default function Contact({contact}) {
  return (
    <li class="clearfix">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
        alt="avatar"
      />
      <div class="about">
        <div class="name">Vincent Porter</div>
        <div class="status">
          {" "}
          <i class="fa fa-circle offline"></i> left 7 mins ago{" "}
        </div>
      </div>
    </li>
  );
}
