import React from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './FilmInfo.module.css'

interface FilmItemProps{
    value: string;
    index: number;
    onChange: (index: number, newValue:string) =>void;
    onDelete: (index: number) =>void;
    className?: string;
}

const FilmItem: React.FC<FilmItemProps> = ({ value, index, onChange, onDelete, className }) => {
    console.log('render item', index);
    
    return (
        <div>
            <input
                className={className}
                type="text"
                value={value}
                onChange={e => onChange(index, e.target.value)}
            />
            <button className={style.delbtn} onClick={() => onDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};


export default FilmItem