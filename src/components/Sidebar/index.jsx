import styles from './Sidebar.module.css';
import { FaStar } from 'react-icons/fa';

export const Sidebar = () => {
  const sidebarFilters = [
    {
      title: 'Rating',
      options: ['All', '1', '2', '3', '4', '5'],
    },
    {
      title: 'Genre',
      options: [
        'All',
        'Action',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Romance',
        'Sci-Fi',
        'Thriller',
      ],
    },
    {
      title: 'Premiered',
      options: ['All', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'],
    },
    {
      title: 'Language',
      options: [
        'All',
        'English',
        'Spanish',
        'French',
        'German',
        'Japanese',
        'Chinese',
        'Korean',
        'Hindi',
      ],
    },
  ];
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Filters</h2>
      <ul className={styles.sidebarList}>
        {sidebarFilters.map((filter, index) => (
          <li key={index} className={styles.filterItem}>
            <h3 className={styles.filterTitle}>{filter.title}</h3>
            <ul className={styles.filterOptions}>
              {filter.options.map((option, idx) => (
                <li key={idx} className={styles.filterOption}>
                  <input
                    type="radio"
                    id={`${filter.title}-${option}`}
                    name={filter.title}
                    value={option}
                    className={styles.filterInput}
                  />
                  <label
                    htmlFor={`${filter.title}-${option}`}
                    className={styles.filterLabel}
                  >
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};
