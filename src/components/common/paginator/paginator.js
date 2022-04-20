import React, { useState } from "react";
import styles from "./Paginator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

let Paginator = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged = (x) => x, portionSize = 10,}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <FontAwesomeIcon onClick={() => {setPortionNumber(portionNumber - 1);}} icon={faAngleLeft}/>
      )}      
      {pages.filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map( p => {
        return (
          <button className={currentPage === p ? styles.selectedPage : styles.pageNumber} key={p} onClick={(e) => {
            onPageChanged(p);
          }}>
          {p}
          </button>
          );
        })}
      {portionCount > portionNumber && (
        <FontAwesomeIcon onClick={() => {setPortionNumber(portionNumber + 1);}} icon={faAngleRight}/>
      )}
    </div>
  );
};

export default Paginator;
