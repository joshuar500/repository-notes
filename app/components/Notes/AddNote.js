import React from 'react';

class AddNote extends React.Component {
  setRef(ref){
      // gets value of input field
      this.note = ref;
  }
  handleSubmit(){
      // value is a property of this.note
      var newNote = this.note.value;
      this.note.value = '';
      this.props.addNote(newNote);
  }  
    render(){      
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
            </span>
        </div>
    )
  }
    
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}

export default AddNote;