import * as React from 'react';
import onClickOutside from 'react-onclickoutside';

function Dropdown({ title, items=[], multiSelect = false }) {
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState([]);
  const toggle = () => setOpen(!open);
 
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some( current =>current.id === item.id))
    {
      if (!multiSelect) {
        setSelection([item])
      } else if (multiSelect) {
        setSelection([...selection, item])
      } 
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval])
    }
  }

  function isItemInSelection(item) {
    if (selection.find(current =>current.id === item.id)){
          return true
    }
    return false
  }

  return (
    <div>
      <div role="button" onClick={() => toggle()}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && '  Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);

//npm install react-onclickoutside --save
