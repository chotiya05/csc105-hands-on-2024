import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md text-center">
                <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
                <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
