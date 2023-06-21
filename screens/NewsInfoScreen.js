import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import RenderNews from "../features/NewsAndUpdates/RenderNews";

const NewsInfoScreen = ({ route }) => {
    const { news } = route.params;
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    //const [favorite, setFavorite] = useState(false);


    
    return <RenderNews 
                newsAndUpdates={news}
                isFavorite={favorites.includes(news.id)}
                markFavorite={() => dispatch(toggleFavorite(news.id))}
            />;
};

export default NewsInfoScreen;