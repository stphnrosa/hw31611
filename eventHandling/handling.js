

/// caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");


// The function handle adding new comments,
function addComment(event) {
  const newComment = cInput.value;
  console.log(event)

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener. Click and onclick are the same thing. If using elemnent or HTML use onclick. if using event listener use click.
cBtn.addEventListener("click", addComment);

