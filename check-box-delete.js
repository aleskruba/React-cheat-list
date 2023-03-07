import  { useState } from 'react';

function CheckboxList() {

  const ar = ['a', 'b', 'c'];
  const [arr,setArr] = useState(ar)

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    console.log([event.target.name])
    console.log(event.target.checked)
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  };

  

  const handleDelete = (itemToDelete) => {
    const newItems = arr.filter(i => i !== itemToDelete)
    setArr(newItems)
  };

  return (
    <div>
      {arr.map((item) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              name={item}
              checked={checkedItems[item] || false}
              onChange={handleChange}
            />
            {item}
          </label>
          {checkedItems[item] && (
            <button onClick={() => handleDelete(item)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
