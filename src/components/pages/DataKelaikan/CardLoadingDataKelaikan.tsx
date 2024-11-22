import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import Container from "@/components/ui/Container";

export default function CardLoadingDataKelaikan() {
  return (
    <SkeletonTheme baseColor="#F2F4F7" highlightColor="#FFF">
      <Container className="!gap-0 !p-4">
        <div className="flex w-full flex-col gap-1">
          <Skeleton width={"120px"} height={"20px"} borderRadius={"16px"} />

          <Skeleton width={"170px"} height={"16px"} borderRadius={"16px"} />
        </div>
        <hr className="mb-4 mt-5" />
        <div className="flex flex-col gap-3">
          <div>
            <Skeleton width={"160px"} height={"20px"} borderRadius={"16px"} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton width={"120px"} height={"20px"} borderRadius={"16px"} />
            <Skeleton width={"240px"} height={"16px"} borderRadius={"16px"} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton width={"120px"} height={"20px"} borderRadius={"16px"} />
            <Skeleton width={"240px"} height={"16px"} borderRadius={"16px"} />
          </div>

          <Skeleton width={"270px"} height={"20px"} borderRadius={"16px"} />
        </div>

        <hr className="mb-4 mt-5" />

        <div className="flex flex-col gap-3">
          <div>
            <Skeleton width={"160px"} height={"20px"} borderRadius={"16px"} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton width={"120px"} height={"20px"} borderRadius={"16px"} />
            <Skeleton width={"240px"} height={"16px"} borderRadius={"16px"} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton width={"120px"} height={"20px"} borderRadius={"16px"} />
            <Skeleton width={"240px"} height={"16px"} borderRadius={"16px"} />
          </div>

          <Skeleton width={"270px"} height={"20px"} borderRadius={"16px"} />
        </div>
      </Container>
    </SkeletonTheme>
  );
}
