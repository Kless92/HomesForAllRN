import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import RenderNews from "../features/NewsAndUpdates/RenderNews";

const NewsInfoScreen = ({ route }) => {
    const { news } = route.params;
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

        return <RenderNews
            newsAndUpdates={news}
            isFavorite={favorites.includes(news.id)}
            markFavorite={() => dispatch(toggleFavorite(news.id))}
            unMarkFavorite={() => dispatch(toggleFavorite(news.id))}
        />;
};

export default NewsInfoScreen;