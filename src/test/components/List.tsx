import { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setList((state) => [...state, newItem]);
  }

  function removeToList(key) {
    setList(list.filter((item) => item !== key));
  }

  return (
    <div className='App'>
      <input
        placeholder='Novo nome'
        value={newItem}
        onChange={(ev) => setNewItem(ev.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      {list.map((item) => (
        <ul key={item}>
          {item}
          <button onClick={() => removeToList(item)}>Remover</button>
        </ul>
      ))}
    </div>
  );
}

export default List;
