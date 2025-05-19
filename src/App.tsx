import { useState} from "react";
import {useEffect} from 'react'
import FilmItem from "./FilmItem";
import styles from './FilmInfo.module.css'



function FilmInfo() {
  const [film, setFilm] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

 useEffect(() => {
    const saved = localStorage.getItem("films");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(list));
  }, [list]);

  const add = () => {
    if (film.trim() !== '') {
      setList([...list, film]);
      setFilm('');
    }
  };  

  const delTask = (index: number) => {
    const newTaskList = list.filter((_, i) => i !== index);
    setList(newTaskList);
  };

  const editTask = (index: number, newValue: string) => {
    const updatedList = [...list];
    updatedList[index] = newValue;
    setList(updatedList);
  };

  return (
    <div className={styles.container}>
      <div className="list">
        <input className={styles.inpt}
          type="text"
          placeholder="Добавить фильм"
          value={film}
          onChange={(e) => setFilm(e.target.value)}
        />
        <button className={styles.btn} onClick={add}>Добавить</button>
      </div>  
      <div className={styles.item}>
        <ul>
          {list.map((item, index) => (
            <FilmItem 
              key={index}
              value={item}
              index={index}
              onChange={editTask}
              onDelete={delTask}
              className={styles.filmItem}
            />
          ))}
         </ul>
        </div>
    </div>
  );
}

export default FilmInfo;
