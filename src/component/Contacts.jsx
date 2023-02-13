import React from "react";

export default function Contacts() {
  return (
    <div id="plist" class="people-list">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            {/* <i class="fa fa-search"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Search..." />
      </div>
      <ul class="list-unstyled chat-list mt-2 mb-0">
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
        <li class="clearfix active">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            alt="avatar"
          />
          <div class="about">
            <div class="name">Aiden Chavez</div>
            <div class="status">
              {" "}
              <i class="fa fa-circle online"></i> online{" "}
            </div>
          </div>
        </li>
        <li class="clearfix">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div class="about">
            <div class="name">Mike Thomas</div>
            <div class="status">
              {" "}
              <i class="fa fa-circle online"></i> online{" "}
            </div>
          </div>
        </li>
        <li class="clearfix">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="avatar"
          />
          <div class="about">
            <div class="name">Christian Kelly</div>
            <div class="status">
              {" "}
              <i class="fa fa-circle offline"></i> left 10 hours ago{" "}
            </div>
          </div>
        </li>
        <li class="clearfix">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar8.png"
            alt="avatar"
          />
          <div class="about">
            <div class="name">Monica Ward</div>
            <div class="status">
              {" "}
              <i class="fa fa-circle online"></i> online{" "}
            </div>
          </div>
        </li>
        <li class="clearfix">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div class="about">
            <div class="name">Dean Henry</div>
            <div class="status">
              {" "}
              <i class="fa fa-circle offline"></i> offline since Oct 28{" "}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
