const Recipe6 = () => {
    return (
        <div className="container mx-auto my-10 py-10">
            <div className="containe bg-orange-300">
                <h1 className="text-center uppercase text-2xl">sudado de pollo</h1>
                <br />
                <img src="src/assets/sudadopollo.webp" alt="" className="mx-auto w-15" />
                <h1 className="font-bold mx-5">Ingredientes</h1>
                <ul className="mx-7">
                    <li className="list-disc">1 cucharada de aceite (14 g)</li>
                    <li className="list-disc">1 diente de ajo (3 g)</li>
                    <li className="list-disc">1 tomate finamente picado (123 g)</li>
                    <li className="list-disc">2 tallos de cebolla larga picada (30 g)</li>
                    <li className="list-disc">4 piernas de pollo (800 g)</li>
                    <li className="list-disc">1 taza de agua (250 ml)</li>
                    <li className="list-disc">1 libra de papa pelada y partida a la mitad (500 g)</li>
                    <li className="list-disc">1 sobre de caldo de gallina (9 g)</li>
                </ul>
                <br />
                <h1 className="font-bold mx-5">!A COCINAR¡</h1>

                <h1 className="font-medium mx-5 mt-2">PASO 1 (Prepara el guiso)</h1>
                <p className="mx-7">En una olla de fondo alto sofríe con el aceite bien caliente el ajo, el tomate y la cebolla por 4 minutos.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 2 (Adiciona ingredientes)</h1>
                <p className="mx-7">Agrega el pollo, el agua, la papa y el sobre de caldo de gallina.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 3 (Cocina el sudado)</h1>
                <p className="mx-7">Tapa la olla y deja a fuego medio por 20 minutos o hasta que cocine completamente.</p>
                <br />

                <h1 className="font-medium mx-5 mt-2">PASO 4 (Sirve)</h1>
                <p className="mx-7">Pasado el tiempo retira del fuego, sirve y acompaña con la ensalada.</p>
                <br />


            </div>
        </div>
    )
}
export default Recipe6;