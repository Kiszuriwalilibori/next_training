import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const DataContainer = ({ promise }) => {
    return (
        <ErrorBoundary fallback={<p className="error">There was an error!</p>} /*onError={logError}*/>
            <Suspense fallback={<p>Fetching Data...</p>}>
                <DataComponent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export const DataComponent = ({ promise }) => {
    const data = use(promise);

    return (
        <ul>
            {data.results.map(item => (
                <li key={item.dob.date}>{item.name.first + " " + item.name.last}</li>
            ))}
        </ul>
    );
};
