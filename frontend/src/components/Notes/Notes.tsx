import { Link } from "react-router-dom";
import fetchNotes from "./fetchNotes";
import "./Notes.css";

const Notes = () => {
  let temp = fetchNotes();
  return temp.map(data => {
    return (
      <Link className="hullo" to={`/note/${data.id}`} key={data.title}>
        <div className="box" key={data.title}>
          <div className="title-text">{data.title}</div>
          <div style={{ color: "white", margin: "none" }}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
          <div className="note-category"># Category #</div>
          <p className="note-text">{data.noteText}</p>
          <div className="created-at">{data.created_at}</div>
        </div>
      </Link>
    );
  });
};

export default Notes;
