import { useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
    const [searchParams] = useSearchParams();
    const number = searchParams.get("number");
    const query = searchParams.get("query");
    const size = searchParams.get("size");

    return (
        <div>
            <p>
                Your favourite post is <b>{query}</b>. Post ID is <b>{number}</b>. Size is <b>{size}</b>.
            </p>
        </div>
    );
}

export default FavouriteDetailPage;
