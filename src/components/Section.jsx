import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import "./Section.css";

const Section = ({ title, productItems }) => {
  return (
    <section
      className={title === "Brand New Collections" && "background-section"}
    >
      <Container>
        <div className="heading">
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.map((productItem) => {
            return (
              <ProductCard
                key={productItem.id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
