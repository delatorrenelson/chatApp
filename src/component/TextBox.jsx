import React from "react";

export default function TextBox() {
  return (
    <div class="chat-message clearfix">
      <div class="input-group mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter text here..."
        />
      </div>
    </div>
  );
}
