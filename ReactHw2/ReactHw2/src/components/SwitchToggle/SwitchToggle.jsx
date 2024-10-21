import React from 'react';
import { useView } from '../../ViewContext/ViewContext.jsx';

const ViewToggle = () => {
  const { view, setView } = useView();

  return (
    <div>
      <button onClick={() => setView('card')} disabled={view === 'card'}>
        Показати картками
      </button>
      <button onClick={() => setView('table')} disabled={view === 'table'}>
        Показати таблицею
      </button>
    </div>
  );
};

export default ViewToggle;
