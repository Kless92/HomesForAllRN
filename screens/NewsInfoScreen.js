import { useState } from "react";
import RenderNews from "../features/NewsAndUpdates/RenderNews";

const NewsInfoScreen = ({ route }) => {
    const { news } = route.params;

    const [favorite, setFavorite] = useState(false);
    return <RenderNews 
                newsAndUpdates={news}
                isFavorite={favorite}
                markFavorite={() => setFavorite(true)}
            />;
};

export default NewsInfoScreen;