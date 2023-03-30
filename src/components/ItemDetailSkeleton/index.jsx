import React from "react";
import { Skeleton } from "@chakra-ui/react";

function ItemDetailSkeleton() {
    return (
        <div className="mt-32 flex justify-center gap-5">
            <Skeleton height={200} width="lg" />
            <div className="flex flex-col gap-10">
                <Skeleton height={10} width="lg" />
                <Skeleton height={10} width="lg" />
                <Skeleton height={10} width="lg" />
            </div>
        </div>
    );
}

export default ItemDetailSkeleton;
