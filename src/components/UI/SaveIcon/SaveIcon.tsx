import React from 'react'
import styles from './SaveIcon.module.scss'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function SaveIcon() {

    function handleClick(event)  {
        event.stopPropagation();
        console.log(2)
    }

  return (
    <>
        <div onClick={handleClick} className={styles.iconSave}>
            <FavoriteBorderIcon/>
        </div>
    </>
  )
}
