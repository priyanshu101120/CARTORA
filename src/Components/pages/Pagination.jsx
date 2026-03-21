import React from "react";

const Pagination = ({ currentPage, totalPages, setcurrentPage }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={() => setcurrentPage(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setcurrentPage(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
