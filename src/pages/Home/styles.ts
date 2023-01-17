import styled from 'styled-components'

export const HomeBanner = styled.div`
  background-image: url('/src/assets/home-background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 1440/544;
  display: grid;
  place-items: center;
`

export const HomeBannerContent = styled.div`
  max-width: 74rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  place-items: center;
`

export const HomeMain = styled.div`
  padding: 2rem;
  max-width: 74rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2';
  font-weight: 900;
  padding-bottom: 1rem;
`

export const Subtitle = styled.h5`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 400;
`

export const FeaturesList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;

  li {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span {
      border-radius: 9999px;
      width: 2rem;
      height: 2rem;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      background: ${(props) => props.theme['yellow-dark']}; 
    }
    &:nth-child(2) span {
      background: ${(props) => props.theme['base-text']};
    }
    &:nth-child(3) span {
      background: ${(props) => props.theme['yellow']};
    }
    &:nth-child(4) span {
      background: ${(props) => props.theme['purple']};
    }
  }
`

export const SectionTitle = styled.h1``

export const CardTitle = styled.h1``