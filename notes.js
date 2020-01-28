const fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};
var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter(element => element.title === title);
  if (title === undefined || body === undefined) {
    console.log(
      "options:" +
        "\n" +
        "--help    show help" +
        "\n" +
        "--title,  -t  Title of note" +
        "\n" +
        "--body,   -b  body of note"
    );
  } else if (double.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNode(note);
  } else {
    console.log("this title already exists u dumbass!");
  }
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(element => element.title !== title);

  if (title === undefined) {
    console.log(
      "options:" +
        "\n" +
        "--help    show help" +
        "\n" +
        "--title,  -t  Title of note"
    );
    console.log("Missing required argument: title ");
  } else if (filteredNotes.length === notes.length) {
    console.log("Title doesnt exist");
  } else {
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
    console.log("Note removed");
  }
};

var readNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(element => element.title === title);

  if (title === undefined) {
    console.log(
      "options:" +
        "\n" +
        "--help    show help" +
        "\n" +
        "--title,  -t  Title of note"
    );
    console.log("Missing required argument: title ");
  } else if (filteredNotes.length === 0) {
    console.log("Note not found ");
  } else {
    console.log("Note Found");

    logNode(filteredNotes[0]);
  }
};
var list = () => {
  var n = fetchNotes().length;
  console.log("Printing " + n + " note(s).");
  var notes = fetchNotes();
  notes.forEach(element => logNode(element));
};
var logNode = element => {
  console.log("**********************************");
  console.log("Title: " + element.title + " Body: " + element.body);
};
module.exports = {
  addingNote,
  removeNote,
  readNote,
  list
};
