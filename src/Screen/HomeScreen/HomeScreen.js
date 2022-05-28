import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useCallback, useEffect, useState } from "react";
import { CRUDRequests } from "../../API";
const Index = Math.round(Math.random()*10)+10;
function HomeScreen(props) {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchData = useCallback(async () => {
    // setIsLoading(true);
    const response = await CRUDRequests.get(
      `/movie/popular?api_key=982b7ec6616614d29c4163363e1e54d4&page=${pageNumber}`
    );
    setMoviesList((prevState) => [...prevState, ...response.data.results]);
    setIsLoading(false);
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection
        img={"https://image.tmdb.org/t/p/w500" + moviesList[Index].backdrop_path}
      >
        <InnerHeroSection>
          <Title>{moviesList[Index].title}</Title>
          <Description>{moviesList[Index].overview}</Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
          {moviesList.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.title}
              img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            />
          ))}
        </CardsContainer>
        <LoadMore
          theme={props.theme}
          isLoading={isLoading}
          onClick={handleLoadMore}
        >
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
