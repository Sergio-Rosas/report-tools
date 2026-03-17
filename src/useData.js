import { useEffect } from "react";

export function useData({ data }) {
    useEffect(() => {
        const currentData = JSON.parse(localStorage.getItem("companyData"));

        localStorage.setItem(
            "companyData",
            JSON.stringify({ ...currentData, ...data }),
        );
    }, []);
}
