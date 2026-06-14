import styles from "./Grid.module.css";
export const Container = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.container} ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};
