import Cart from "./components/Cart";
import Aside from "./components/layouts/Aside";
import Main from "./components/layouts/Main";
import Section from "./components/layouts/Section";
import OrderConfirm from "./components/OrderConfirm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Main>
        <Section>
          <ProductList />
        </Section>
        <Aside>
          <Cart />
        </Aside>
      </Main>
      <OrderConfirm />
    </>
  );
}

export default App;
