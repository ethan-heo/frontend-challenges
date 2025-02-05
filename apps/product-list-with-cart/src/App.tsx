import Cart from "./components/Cart";
import Aside from "./components/layouts/Aside";
import Section from "./components/layouts/Section";
import ProductList from "./components/ProductList";

function App() {
  return (
    <main>
      <Section>
        <ProductList />
      </Section>
      <Aside>
        <Cart />
      </Aside>
    </main>
  );
}

export default App;
