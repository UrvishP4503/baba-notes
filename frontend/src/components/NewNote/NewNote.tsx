import Dropdown from "../Dropdown/Dropdown";
import "./NewNote.css";

interface NewNote {
  title: string;
  // category: string;
  note: string;
}

async function saveNote(noteData: NewNote): Promise<void> {
  // TODO: save note to database
  console.log(noteData);
}

const handleSave = () => {
  const title = document.querySelector(".title") as HTMLInputElement;
  const note = document.querySelector("textarea") as HTMLTextAreaElement;

  const noteData: NewNote = {
    title: title.value,
    note: note.value,
  };

  saveNote(noteData);
};

const NewNote = () => {
  return (
    <div className="new-note">
      <div className="head">
        <input type="text" className="title" placeholder="Enter Title"></input>
        <div className="selected-category"> selected Category</div>
        <div className="dropdown-container">
          <Dropdown />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>

      <textarea
        name="note-text"
        placeholder="You can always edit a bad page. You can't edit a blank page."
      ></textarea>
    </div>
  );
};

export default NewNote;
