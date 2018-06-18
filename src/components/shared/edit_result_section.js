import React from 'react';
import StaticResult from './static_result';
import EditResult from './edit_result';

function EditResultSection({ currentUser, editing, result, resultChange }) {
  return (
    <td>
      {currentUser && editing
        ? <EditResult
            result={result} 
            resultChange={resultChange} />
        : <StaticResult result={result} />
      }
    </td>
  )
}

export default EditResultSection
