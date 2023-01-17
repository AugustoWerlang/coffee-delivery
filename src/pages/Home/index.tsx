import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from "phosphor-react";
import { Card, CardsWrapper, FeaturesList, HomeBanner, HomeMain } from "./styles";

export function Home() {
  return (
    <main>
      <HomeBanner>
        <div>
          <div>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <h5>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </h5>
            <FeaturesList>
              <li>
                <span>
                  <ShoppingCart size={16} weight="fill" color="#fff"/>
                </span>
                <p>Compra simples e segura</p>
              </li>
              <li>
                <span>
                  <Package size={16} weight="fill" color="#fff"/>
                </span>
                <p>Embalagem mantém o café intacto</p>
              </li>
              <li>
                <span>
                  <Timer size={16} weight="fill" color="#fff"/>
                </span>
                <p>Entrega rápida e rastreada</p>
              </li>
              <li>
                <span>
                  <Coffee size={16} weight="fill" color="#fff"/>
                </span>
                <p>O café chega fresquinho até você</p>
              </li>
            </FeaturesList>
          </div>
          <div>
            <img src="/src/assets/home-image.png" alt="" />
          </div>
        </div>
      </HomeBanner>
      <HomeMain>
        <h2>
          Nossos cafés
        </h2>
        <CardsWrapper>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
          <Card>
            <img src="/src/assets/coffees/expresso.png" alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ <span>9,99</span></span>
              <input type="number" value="1" />
              <button><ShoppingCartSimple size={22} weight="fill" color="#fff"/></button>
            </div>
          </Card>
        </CardsWrapper>
      </HomeMain>
    </main>
  )
}