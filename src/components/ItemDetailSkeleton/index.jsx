import React from "react";
import { Skeleton } from "@chakra-ui/react";
import ErrorPage from "../../routes/error-page";

function ItemDetailSkeleton() {
    return (
        <div className="mt-32 flex flex-col sm:flex-row justify-center items-center gap-5">
            <Skeleton height={200} w={80} />
            <div className="flex flex-col gap-10">
                <Skeleton height={10} width="lg" />
                <Skeleton height={10} width="lg" />
                <Skeleton height={10} width="lg" />
            </div>
        </div>
    );
}

export default ItemDetailSkeleton;
