import React from "react";

import { DataContainer } from "./Container";
import { fetchData } from "./fetchData";

const promise = fetchData();

export default function DataFetchingComponent() {
    return promise && <DataContainer promise={promise} />;
}

DataFetchingComponent;
