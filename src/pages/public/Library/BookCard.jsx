import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./styles.module.css";

const BookCard = ({ book }) => {
  return (
    <Box
      className={styles.bookCard}
      sx={{
        // flexGrow: 1,
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        padding: "3rem",
        borderRadius: "0.8rem",
        position: "relative",
        transition: "all 0.3s",
        cursor: "pointer",
        gap: "1rem",
        "&:hover": {
          // backgroundColor: "var(--background-color1)",
          transform: "translateY(-1rem)",
        },
      }}
    >
      <div className={`${styles.cardFlipEffect} Transition-1`} />
      <FavoriteBorderIcon
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 2,
          color: "var(--text-color0)",
          transition: "all 0.3s",
          "&:hover": {
            color: "var(--accent-color2)",
          },
        }}
      />
      <Box
        component="img"
        className="Transition-1"
        src={book.image}
        alt="Ícone do cartão"
        sx={{
          height: "14rem",
          borderRadius: "0.8rem",
          marginBottom: "1rem",
          margin: "0 auto",
          marginBottom: "2rem",
          zIndex: 2,
        }}
      />

      <span
        style={{
          fontSize: "1.5rem",
          color: "var(--text-main-2)",
          width: "max-content",
          margin: "0 auto",
          width: "12rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {book.title}
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
          zIndex: 2,
        }}
      >
        {Array.from({ length: book.rate }, (_, index) => (
          <StarIcon
            key={index}
            sx={{
              color: "var(--accent-color2)",
            }}
          />
        ))}
        {Array.from({ length: 5 - book.rate }, (_, index) => (
          <StarBorderIcon
            key={index}
            sx={{
              color: "var(--text-color0)",
            }}
          />
        ))}
      </span>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "var(--text-main-1)",
          textAlign: "center",
          lineHeight: "1.5rem",
          zIndex: 2,
        }}
      >
        {book.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      {/* <button
        className={`Transition-1 ${styles.Button}`}
        style={{
          position: "relative",
          margin: "0 auto",
          width: "max-content",
        }}
      >
        Ver mais
      </button> */}
    </Box>
  );
};

export default BookCard;
