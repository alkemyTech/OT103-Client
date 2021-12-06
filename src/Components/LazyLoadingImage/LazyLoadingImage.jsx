import React, { Suspense } from "react";
const Imagen = React.lazy(()=> import("./Image"))

const LazyLoadingImage = ({url}) => {
    return (
        <Suspense fallback={<h5>...Loading</h5>}>
            <Imagen url={url}/>
        </Suspense>
        )
}
export default LazyLoadingImage;
