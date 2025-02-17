import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

function Pagination(props) {
    let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings) || [];

    // Check if the left or right buttons should be disabled
    const isFirstPage = props.page === 1;
    const isLastPage = props.page === props.totalPage;

    return (
        <ul className="pagination pagination-md justify-content-end">
            <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
                <span 
                    onClick={() => !isFirstPage && props.onPageChange("&laquo;")} 
                    className="page-link"
                >
                    &laquo;
                </span>
            </li>
            <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
                <span 
                    onClick={() => !isFirstPage && props.onPageChange("&lsaquo;")} 
                    className="page-link"
                >
                    &lsaquo;
                </span>
            </li>
            {array.map(value => {
                // Active page logic
                if (value === props.page) {
                    return (
                        <li key={value} className="page-item active">
                            <span 
                                onClick={() => props.onPageChange(value)} 
                                className="page-link"
                            >
                                {value}
                            </span>
                        </li>
                    );
                } else {
                    return (
                        <li key={value} className="page-item">
                            <span 
                                onClick={() => props.onPageChange(value)} 
                                className="page-link"
                            >
                                {value}
                            </span>
                        </li>
                    );
                }
            })}
            <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                <span 
                    onClick={() => !isLastPage && props.onPageChange("&rsaquo;")} 
                    className="page-link"
                >
                    &rsaquo;
                </span>
            </li>
            <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                <span 
                    onClick={() => !isLastPage && props.onPageChange("&raquo;")} 
                    className="page-link"
                >
                    &raquo;
                </span>
            </li>
        </ul>
    );
}

export default Pagination;
