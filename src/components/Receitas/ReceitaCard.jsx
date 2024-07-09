import React from "react";

export function Meal({ nome, categoria, origem, ingredientes, modoDePreparo, pathImagem }) {
    return (
        <div className="w-80 h-full flex flex-col items-center p-2.5 gap-2.5 ring-1 ring-black/30 rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white">
            <figure className="rounded-lg overflow-hidden">
                <img src={pathImagem} alt={nome} className="h-44" />
            </figure>
            <h2 className="text-xl font-bold text-center">
                {nome.length > 20 ? nome.slice(0, 20) + '...' : nome}
            </h2>
            <p className="text-center">
                {modoDePreparo.length > 100 ? modoDePreparo.slice(0, 100) + '...' : modoDePreparo}
            </p>
            <p className="text-center font-thin text-2xl border-y-[1px] border-y-black/30 w-full p-2">
                {categoria}
            </p>
        </div>
    );
}
