import React from "react";
import { Skeleton } from "@chakra-ui/react";

function ItemDetailSkeleton() {
    return (
        <div className="mt-32 flex flex-col sm:flex-row justify-center items-center gap-5">
            <Skeleton height={200} w={80} />
            <div className="flex flex-col items-center gap-10">
                <Skeleton height={[5, 10]} width={["xs", "lg"]} />
                <Skeleton height={[5, 10]} width={["xs", "lg"]} />
                <Skeleton height={[5, 10]} width={["xs", "lg"]} mb={5} />
            </div>
        </div>
    );
}

export default ItemDetailSkeleton;
