"use client"

import Masonry from "react-masonry-css"

export default function paulcollett() {
    var items = [
        <figure>
            <img src="https://cataas.com/cat" alt="" />
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
        </figure>,
        <figure>
            <img src="https://cataas.com/cat" alt="" />
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
        </figure>,
        <figure>
            <img src="https://cataas.com/cat" alt="" />
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
        </figure>,
        <figure>
            <img src="https://cataas.com/cat" alt="" />
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
        </figure>,
        <figure>
            <img src="https://cataas.com/cat" alt="" />
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
        </figure>
    ];

    // Convert array to JSX items
    items = items.map(function (item) {
        return <div key={item.id}>{item.name}</div>
    });
    return <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
    >
    <figure>
        <img src="https://cataas.com/cat/one" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
    </figure>,
    <figure>
        <img src="https://cataas.com/cat/two" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
    </figure>,
    <figure>
        <img src="https://cataas.com/cat/three" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
    </figure>,
    <figure>
        <img src="https://cataas.com/cat/four" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
    </figure>,
    <figure>
        <img src="https://cataas.com/cat/five" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus odit quibusdam magnam corrupti, neque atque repellat excepturi laboriosam cupiditate velit eum ut sapiente architecto maiores dolorum deserunt alias. Vitae.</figcaption>
    </figure>
    </Masonry>
}
