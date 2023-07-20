import React from 'react'

type TileOptions = {
    name: string,
    age: Number
};

export type Location = {};

export function Tile(options: TileOptions) {
    const name = options.name;


    return (
        <div>Tile</div>
    )
}