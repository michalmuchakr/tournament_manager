import React from 'react'

function FinalTabHeader({ name }) {
  return (
    <tr>
      <td colSpan="5">
        <span>{ name }</span>
      </td>
    </tr>
  )
}

export default FinalTabHeader
