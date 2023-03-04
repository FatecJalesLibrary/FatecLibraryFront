import { Autocomplete, Container } from "@mui/material";
import CustomSection from "components/CustomSection";
import form_styles from "components/SpecificStyles/form.module.css";
import { books_categories } from "./books_categories";
import { books } from "./books";
import BookCard from "./BookCard";

const LibraryPage = () => {
  return (
    <CustomSection
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "5rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <form
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              width: "100%",
            }}
            className={form_styles.customFormStyle}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submitted");
            }}
          >
            <input
              type="text"
              placeholder="Pesquisar pelo nome"
              style={{
                flexGrow: 1,
              }}
            />

            <Autocomplete
              options={books_categories}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    placeholder="Categoria"
                  />
                </div>
              )}
            />

            <select name="Filtro">
              <option value="Mais procurados" selected>
                Mais procurados
              </option>
              <option value="Mais avaliados">Mais avaliados</option>
              <option value="Mais recentes">Mais recentes</option>
              <option value="Promoções">Promoções</option>
              <option value="Preço crescente">Preço crescente</option>
              <option value="Preço decrescente">Preço decrescente</option>
            </select>

            <input type="submit" value="Buscar" />
          </form>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            perspective: "1500px",
          }}
        >
          {books.map((book) => {
            return <BookCard {...{book}} />;
          })}
        </div>
      </Container>
    </CustomSection>
  );
};

export default LibraryPage;
