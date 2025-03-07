"use client";

import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        throw new Error("Error testowy");
    }, []);
    return <h2>About</h2>;
}
