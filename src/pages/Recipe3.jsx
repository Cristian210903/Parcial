const Recipe3 = () => {
    return (
        <div className="container mx-auto my-10 py-10">
            <div className="containe bg-orange-300">
                <h1 className="text-center uppercase text-2xl">Caldo de costilla</h1>
                <br />
                <img src="src/assets/caldo.jpg" alt="" className="mx-auto w-15" />
                <h1 className="font-bold mx-5">Ingredientes</h1>
                <ul className="mx-7">
                    <li className="list-disc">5 tazas de agua (1200 ml)</li>
                    <li className="list-disc">1 cubo de caldo con costilla (11 g)</li>
                    <li className="list-disc">1 libra de costilla de res cortada en 4 trozos (500 g)</li>
                    <li className="list-disc">2 libras de papa pelada y cortada en trozos (1000 g)</li>
                    <li className="list-disc">1 cucharada de cilantro picado (10 g)</li>
                    <li className="list-disc">1 tallo de cebolla larga picada (15 g)</li>
                </ul>
                <br />
                <h1 className="font-bold mx-5">!A COCINAR¡</h1>

                <h1 className="font-medium mx-5 mt-2">PASO 1 (Cocina la costilla)</h1>
                <p className="mx-7">En una olla a presión añade el agua, la costilla de res y el cubo de caldo con costilla. Cierra la olla, lleva a fuego alto y cocina por 20 minutos.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 2 (Agrega la papa)</h1>
                <p className="mx-7">Destapa la olla con cuidado, lleva nuevamente al fuego, agrega la papa partida en trozos y cocina por 15 minutos más o hasta que la papa esté bien blandita.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 3 (Prepara el picadillo)</h1>
                <p className="mx-7">Corta finamente la cebolla larga y el cilantro, mezcla en un tazón y reserva hasta el momento de servir.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 4 (Sirve)</h1>
                <p className="mx-7">Sirve el caldo de papa con costilla y encima pon el picadillo de cebolla y cilantro.</p>
                <br />


            </div>
        </div>
    )
}
export default Recipe3;