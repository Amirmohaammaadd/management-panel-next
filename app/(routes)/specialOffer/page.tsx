"use client"
import { Suspense } from "react";
import SearchParamComp from "./srchparam-comp";

const PageSpecialOffer = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <SearchParamComp />
        </Suspense>
    );
}

export default PageSpecialOffer;