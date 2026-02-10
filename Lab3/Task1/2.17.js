function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "are u sure?",
  () => alert("ur adopted congrats"),
  () => alert("u still dont have parents")
);