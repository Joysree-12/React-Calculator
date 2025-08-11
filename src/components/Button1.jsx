import styles from "./Button1.module.css";
const Button1 = () => {
const buttonnames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
 return (
<>
 <div className={styles.btn1}>
{buttonnames.map(buttonname=>
  <button key={buttonname} className={styles.button1}>{buttonname}</button>  
)}
</div>
</>
);
};

export default Button1;