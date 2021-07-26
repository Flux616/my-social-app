import React, {useState} from 'react';
import classes from './Users.module.css'

type Props = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
}

const Paginator: React.FC<Props> = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount: number = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorderPortion = (portionNumber - 1) * portionSize;
    let rightBorderPortion = portionNumber * portionSize;


    return (
        <div className={classes.paginatorBody}>
            {portionNumber > 1 && <button className={classes.paginatorButton} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            <div className={classes.paginatorItems}>
                {pages.filter((page) => page >= leftBorderPortion && page < rightBorderPortion)
                    .map(page => {
                        return <span onClick={(event) => {
                            onPageChanged(page)
                        }} className={classes.pageItem + ' ' + (currentPage === page && classes.selectedPage)}>{page}</span>
                    })}
            </div>
            {portionNumber < portionCount && <button className={classes.paginatorButton} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator;