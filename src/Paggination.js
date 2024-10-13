import React from 'react';

const Paggination = ({ totalPages, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    const renderPaginationButtons = () => {
        const buttons = [];
        // Previous button
        buttons.push(
            <button
                key="prev-button"
                disabled={currentPage === 1}
                className="page-btn pagi-1 d-flex align-items-center text-white btn-theme-primary"
                onClick={() => onPageChange(currentPage - 1)}
            >
                <i className="fa fa-angle-double-left" aria-hidden="true" style={{fontSize: '12px'}}></i>
            </button>
        );

        // Page number buttons
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`page_num ${i === currentPage ? 'active' : ''}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // Next button
        buttons.push(
            <button
                key="next-button"
                disabled={currentPage === totalPages}
                className="page-btn d-flex align-items-center pagi-2 text-white btn-sm btn-theme-primary"
                onClick={() => onPageChange(currentPage + 1)}
            >
                <i class="fa-solid fa-angles-right" style={{fontSize: '12px'}}></i>
            </button>
        );

        return buttons;
    };

    return (
        <div className="pagination-container custom-pagination mt-3 d-flex">
            <div className="pagination custom-pagination me-2">
                {renderPaginationButtons()}
            </div>
            <div>
                {/* <select className="pg-drp p-0 m-0" value={itemsPerPage} onChange={onItemsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={500}>500</option>
                </select> */}
            </div>
        </div>
    );
};

export default Paggination;
