import React, {useState} from 'react';
import classes from './Users.module.css'


const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorderPortion = (portionNumber - 1) * portionSize;
    let rightBorderPortion = portionNumber * portionSize;

    window.pages = pages;

    return (
        <div className={classes.paginatorBody}>
            {portionNumber > 1 && <button className={classes.paginatorButton} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            <div className={classes.paginatorItems}>
                {pages.filter(page => page >= leftBorderPortion && page < rightBorderPortion)
                    .map(page => {
                        return <span onClick={(event) => {
                            onPageChanged(page)
                        }}
                                     className={classes.pageItem + ' ' + (currentPage === page && classes.selectedPage)}>{page}</span>
                    })}
            </div>
            {portionNumber < portionCount && <button className={classes.paginatorButton} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator;