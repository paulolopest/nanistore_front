import React, { useState } from 'react'
import ManBody from '../../../Assets/images/men-body-measurments.png'
import WomanBody from '../../../Assets/images/women-body-measurments.png'
import { sizes } from '../../../Utils/Extra'
import { motion } from 'framer-motion'

const MeasuresTable = ({ state }) => {
    const [bodyType, setBodyType] = useState('man')

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: state ? 'auto' : 0, opacity: state ? 1 : 0 }}
            className={`flexCol gap-5 pt-5`}
        >
            <div className="flex gap-10 border-y border-solid border-neutral-200 py-4 text-base font-bold uppercase text-subtitle max-1280:text-sm">
                <p
                    onClick={() => setBodyType('man')}
                    className={`${bodyType === 'man' ? 'text-red-500' : 'text-subtitle'} cursor-pointer`}
                >
                    Homens
                </p>
                <p
                    onClick={() => setBodyType('woman')}
                    className={`${bodyType === 'woman' ? 'text-red-500' : 'text-subtitle'} cursor-pointer`}
                >
                    Mulheres
                </p>
            </div>

            <div className="flex flex-col justify-center gap-y-16  max-1280:text-sm">
                <div className="flex flex-col gap-6 max-1280:gap-4">
                    <h1 className="font-bold uppercase text-subtitle">Tabela de medidas masculinas</h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex w-[40.75rem] gap-x-20 font-light max-1280:w-full max-1280:justify-between max-1280:gap-x-0 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-10"
                    >
                        <div className="flex flex-col uppercase">
                            <h1 className=" font-bold">Tamanho</h1>
                            <p>{sizes[0].label}</p>
                            <p>{sizes[1].label}</p>
                            <p>{sizes[2].label}</p>
                            <p>{sizes[3].label}</p>
                            <p>{sizes[4].label}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className=" font-bold">Busto</h1>
                            <p>{sizes[0][bodyType].busto}</p>
                            <p>{sizes[1][bodyType].busto}</p>
                            <p>{sizes[2][bodyType].busto}</p>
                            <p>{sizes[3][bodyType].busto}</p>
                            <p>{sizes[4][bodyType].busto}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className=" font-bold">Cintura</h1>
                            <p>{sizes[0][bodyType].cintura}</p>
                            <p>{sizes[1][bodyType].cintura}</p>
                            <p>{sizes[2][bodyType].cintura}</p>
                            <p>{sizes[3][bodyType].cintura}</p>
                            <p>{sizes[4][bodyType].cintura}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className=" font-bold">Quadril</h1>
                            <p>{sizes[0][bodyType].quadril}</p>
                            <p>{sizes[1][bodyType].quadril}</p>
                            <p>{sizes[2][bodyType].quadril}</p>
                            <p>{sizes[3][bodyType].quadril}</p>
                            <p>{sizes[4][bodyType].quadril}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className=" font-bold">Entrepernas</h1>
                            <p>{sizes[0][bodyType].entrepernas}</p>
                            <p>{sizes[1][bodyType].entrepernas}</p>
                            <p>{sizes[2][bodyType].entrepernas}</p>
                            <p>{sizes[3][bodyType].entrepernas}</p>
                            <p>{sizes[4][bodyType].entrepernas}</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex w-[40.75rem] flex-col font-normal max-1280:w-fit"
                >
                    <h1 className="font-bold text-subtitle">Como medir?</h1>
                    <p className="text-sm text-body">
                        Meça sempre em pé, com roupas leves. Utilize sempre uma fita métrica mantendo na
                        horizontal, contornando por completo a área desejada, sem pressionar. Após a medição,
                        verifique na tabela o tamanho correspondente.
                    </p>
                </motion.div>

                <div className="flex gap-10">
                    <div className="flex w-[30.50rem] flex-col justify-between text-lg font-light text-neutral-700 max-1280:w-fit max-1280:text-base">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="leading-none text-body"
                        >
                            <span className="font-bold text-subtitle">Busto:</span> Meça a volta total do
                            busto (a parte mais volumosa do tronco).
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="leading-none text-body"
                        >
                            <span className="font-bold text-subtitle">Cintura:</span> Meça a volta total da
                            cintura (a parte mais estreita do tronco), cerca de dois dedos acima do umbigo.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="leading-none text-body"
                        >
                            <span className="font-bold text-subtitle">Quadril:</span> Meça a volta total do
                            quadril (a parte mais larga do tronco), pouco abaixo da cintura.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="leading-none text-body"
                        >
                            <span className="font-bold text-subtitle">Entrepernas:</span>
                            Meça a distância total entre o início da parte da coxa e o calcanhar.
                        </motion.p>
                    </div>

                    <div>
                        <img src={bodyType === 'man' ? ManBody : WomanBody} alt="Exemplo de corpo" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MeasuresTable
