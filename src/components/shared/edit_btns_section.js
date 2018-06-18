import React from 'react'

function EditBtnsSection({ currentUser, editing, validSave, waitingForTimeTable, saveResult, cancel, editClicked }) {
  return (
    <React.Fragment >
      {currentUser && editing &&
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            {validSave && !waitingForTimeTable &&
                <button className="btn btn-outline-secondary ml-auto"
                          onClick = {saveResult}> Save </button>
            }
            <button className="btn btn-outline-secondary ml-auto"
                      onClick={ cancel }> Cancel </button>
          </div>
        </td>
      }
      {currentUser && !editing &&
        <td>
          <button
            className="btn btn-outline-secondary ml-auto"
            onClick = {editClicked}>Edit</button>
        </td>
      }
    </React.Fragment >
  )
}

export default EditBtnsSection
