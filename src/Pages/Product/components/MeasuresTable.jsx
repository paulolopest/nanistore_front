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
            className={`flexCol gap-5 pt-5 text-neutral-600 `}
        >
            <div className="flex gap-10 border-y border-solid border-neutral-200 py-4 font-semibold uppercase max-1280:text-sm">
                <p
                    onClick={() => setBodyType('man')}
                    className={`${bodyType === 'man' && 'text-red-500'} cursor-pointer`}
                >
                    Homens
                </p>
                <p
                    onClick={() => setBodyType('woman')}
                    className={`${bodyType === 'woman' && 'text-red-500'} cursor-pointer`}
                >
                    Mulheres
                </p>
            </div>

            <div className="flex flex-col justify-center gap-y-16  max-1280:text-sm">
                <div className="flex flex-col gap-6 max-1280:gap-4">
                    <h1 className="font-semibold uppercase ">
                        Tabela de medidas {bodyType === 'man' ? 'masculinas' : 'feminas'}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex w-[40.75rem]   gap-x-20 font-light max-1280:w-full max-1280:justify-between max-1280:gap-x-0 max-540:text-xs [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-10"
                    >
                        <div className="flex flex-col uppercase">
                            <h1 className="font-semibold">Tamanho</h1>
                            <p>{sizes[0].label}</p>
                            <p>{sizes[1].label}</p>
                            <p>{sizes[2].label}</p>
                            <p>{sizes[3].label}</p>
                            <p>{sizes[4].label}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className="font-semibold">Busto</h1>
                            <p>{sizes[0][bodyType].busto}</p>
                            <p>{sizes[1][bodyType].busto}</p>
                            <p>{sizes[2][bodyType].busto}</p>
                            <p>{sizes[3][bodyType].busto}</p>
                            <p>{sizes[4][bodyType].busto}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className="font-semibold">Cintura</h1>
                            <p>{sizes[0][bodyType].cintura}</p>
                            <p>{sizes[1][bodyType].cintura}</p>
                            <p>{sizes[2][bodyType].cintura}</p>
                            <p>{sizes[3][bodyType].cintura}</p>
                            <p>{sizes[4][bodyType].cintura}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className="font-semibold">Quadril</h1>
                            <p>{sizes[0][bodyType].quadril}</p>
                            <p>{sizes[1][bodyType].quadril}</p>
                            <p>{sizes[2][bodyType].quadril}</p>
                            <p>{sizes[3][bodyType].quadril}</p>
                            <p>{sizes[4][bodyType].quadril}</p>
                        </div>

                        <div className="flex flex-col uppercase">
                            <h1 className="font-semibold">Entrepernas</h1>
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
                    className="flex w-[40.75rem] flex-col gap-1 text-neutral-400 max-1280:w-fit max-540:text-sm"
                >
                    <h1 className="text-neutral-600">Como medir?</h1>
                    <p>
                        Meça sempre em pé, com roupas leves. Utilize sempre uma fita métrica mantendo na
                        horizontal, contornando por completo a área desejada, sem pressionar. Após a medição,
                        verifique na tabela o tamanho correspondente.
                    </p>
                </motion.div>

                <div className="flex justify-between gap-10">
                    <div className="flex w-[40.75rem] flex-col justify-between gap-y-6 max-1280:w-fit max-540:text-sm [&>p]:text-neutral-400">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <span className="text-neutral-600">Busto:</span> Meça a volta total do busto (a
                            parte mais volumosa do tronco).
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <span className="text-neutral-600">Cintura:</span> Meça a volta total da cintura
                            (a parte mais estreita do tronco), cerca de dois dedos acima do umbigo.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <span className="text-neutral-600">Quadril:</span> Meça a volta total do quadril
                            (a parte mais larga do tronco), pouco abaixo da cintura.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <span className="text-neutral-600">Entrepernas:</span> Meça a distância total
                            entre o início da parte da coxa e o calcanhar.
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
