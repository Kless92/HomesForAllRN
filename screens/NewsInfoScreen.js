import RenderNews from "../features/NewsAndUpdates/RenderNews";

const NewsInfoScreen = ({ route }) => {
    const { news } = route.params;
    return <RenderNews newsAndUpdates={news}/>;
};

export default NewsInfoScreen;