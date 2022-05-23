import {useContext} from "react";

import {Context} from "../Context";
import Image from "../components/Image";
import {getClass} from "../utils";

export default function Photos() {
    const {images} = useContext(Context)

    const imageElements = images.map((image, index) => (
       <Image  key={image.id} img={image} className={getClass(index)} />
    ));

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}
