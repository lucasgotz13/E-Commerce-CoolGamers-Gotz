import React from "react";
import { Skeleton } from "@chakra-ui/react";

function ItemListSkeleton({ productos }) {
    return (
        <div className="p-20 flex justify-center gap-5">
            <Skeleton height={375} width={275} />
            <Skeleton height={375} width={275} />
            <Skeleton height={375} width={275} />
        </div>
    );
}

export default ItemListSkeleton;
