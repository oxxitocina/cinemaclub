import React from 'react'
import styles from './BookmarkIcon.module.scss'
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function BookmarkIcon() {
  return (
    <>
        <div className={styles.iconLater}>
            <BookmarkBorderIcon/>
        </div>
    </>
  )
}
