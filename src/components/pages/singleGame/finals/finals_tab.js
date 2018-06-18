import React from 'react';
import FinalsContent from './finals_content';

function FinalsTab() {
  return (
    <div className="tab-pane" id="finals_tab" role="tabpanel">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th className="narrow">Team #1</th>
            <th className="narrow">Team #2</th>
            <th>Result</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          <FinalsContent />
        </tbody>
      </table>
    </div>
  )
}

export default FinalsTab;
