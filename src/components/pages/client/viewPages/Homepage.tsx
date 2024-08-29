import Carousel from '../carousel/Carousel';
import PelayananLegal from './PelayananLegal';
import SeparatorPage from './SeparatorPage';
import CallAleaPage from './CallAleaPage';
import CardsPage from './CardsPage';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <PelayananLegal />
      <SeparatorPage />
      <CallAleaPage />
      <CardsPage />
    </>
  );
}
