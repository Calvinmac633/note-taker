const notesData = require("../db/db.json");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        // console.log(req.params)
        res.json(notesData);
    });

    app.post("/api/notes", (req, res) => {
        const lastId = notesData.length;
        const id = lastId + 1;
        console.log(req.body)
        //Applying the newly created id to the note object
        const idNote = ({ id, ...req.body })
        console.log(idNote)
        notesData.push(idNote);
        res.json(notesData)
        res.json(notesData.slice(notesData.length - 1));
        // res.json(notesData.splice(this.notesData));
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params)
        let noteID = notesData.find(({ id }) => {
            id === JSON.parse(req.params.id)
        }
        );

        notesData.splice(notesData.indexOf(noteID), 1);
        res.end();
    });

};