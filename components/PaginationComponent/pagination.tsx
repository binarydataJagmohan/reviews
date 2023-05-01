import styles from "../../styles/Home.module.css";

type PaginationProps = {
  items: any[]; // Update the type to reflect that `items` is an array
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ items, pageSize, currentPage, onPageChange }: PaginationProps) => {
  const pagesCount = Math.ceil(items.length / pageSize); // Use `items.length` to get the length of the array
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
             onClick={() => onPageChange(page)}
          >
            <a className={styles.pageLink}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
