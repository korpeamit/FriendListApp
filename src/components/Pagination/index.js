import React from 'react'

const Pagination = ({ listPerPage, totalList, paginate, currentPage }) => {
    const pagenumbers = [];

    for(let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
        pagenumbers.push(i);
    }

    return (
        <>
            <ul className="as-pagination">
                {
                    pagenumbers.map(number => {
                        return (
                            <li key={number} className={`as-pagination__item ${currentPage == number ? "activePagination" : "" }`}>
                                <span onClick={() => paginate(number)} className="as-pagination__item--link">
                                    {number}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Pagination;