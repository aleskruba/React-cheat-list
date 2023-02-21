
export default function App() {

  // const const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
    return {
      value: n,
      id: n,
    };
  });

  const [newData, setnewData] = React.useState(data);

  const deletehandler = (id) => {
    const newValue = newData.filter((i) => i.id != id);
    setnewData(newValue);
  };
  return (
    <div>
      {newData.map((d, index) => {
        return (
          <p key={d.value}>
            index:{d.id} , value:{d.value}{' '}
            <button onClick={(id) => deletehandler(index)}>delete</button>
          </p>
        );
      })}
    </div>
  );
}
