import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import RenderNews from "../features/NewsAndUpdates/RenderNews";
import * as Animatable from 'react-native-animatable';

const NewsInfoScreen = ({ route }) => {
    const { news } = route.params;
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

        return <RenderNews
            newsAndUpdates={news}
            isFavorite={favorites.includes(news.id)}
            markFavorite={() => dispatch(toggleFavorite(news.id))}
        />;
};

export default NewsInfoScreen;