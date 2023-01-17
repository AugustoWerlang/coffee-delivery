import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { FeaturesList, HomeBanner, HomeBannerContent, HomeMain, Subtitle, Title } from "./styles";

export function Home() {
  return (
    <main>
      <HomeBanner>
        <HomeBannerContent>
          <div>
            <Title>
              Encontre o café perfeito para qualquer hora do dia
            </Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Subtitle>
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
        </HomeBannerContent>
      </HomeBanner>
      <HomeMain>
        main content
      </HomeMain>
    </main>
  )
}