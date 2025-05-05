import React from 'react';
import styles from './Pagination.module.css';

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Назад
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Вперёд
      </button>
    </div>
  );
};

export default Pagination;
