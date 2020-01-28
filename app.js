console.log("starting app.js");


const notes = require ('./notes.js')


var title = process.argv[4];
var body = process.argv[6];


var command = process.argv[2];

if(command === "add" ){
    console.log('adding note');
    notes.addingNote(title, body);
} else if (command === "remove"){
    //console.log("removing note");
   notes.removeNote(title);
}else if (command === "read"){
  
    notes.readNote(title);
}else if (command === "list"){
    console.log("listing all notes");
    notes.list();
}else {
    console.log("unknown command was used !");
}
