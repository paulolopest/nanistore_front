import React from 'react'
import ListLinks from './ListLinks'
import { helperFooterList, institutionalFooterList, policiesFooterList } from '../../Utils/Extra'
import {
    EnvelopeSimple,
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    PinterestLogo,
    TiktokLogo,
    XLogo,
    YoutubeLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="mt-16 flex w-full flex-col justify-between gap-40 bg-neutral-800 px-28 py-10 text-white">
            <div className="flex size-full justify-between">
                <ListLinks list={institutionalFooterList} title={'Institucional'} />

                <ListLinks list={policiesFooterList} title={'Políticas'} />

                <ListLinks list={helperFooterList} title={'Ajuda'} />
            </div>

            <div className="flex items-end justify-between">
                <p className="text-xs">
                    Copyright ATELIER DO SICKO LTDA - 15802576000140 - 2023. Todos os direitos reservados.
                </p>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase">Site desenvolvido por:</p>
                    <div className="flex flex-col gap-1">
                        <p>Paulo Tarso</p>

                        <div className="flex items-center gap-2">
                            <p>Desenvolvedor Full Stack</p>

                            <div className="flex gap-2">
                                <Link className="size-6">
                                    <GithubLogo className="size-full" />
                                </Link>
                                <Link className="size-6">
                                    <LinkedinLogo className="size-full" />
                                </Link>
                                <Link className="size-6">
                                    <EnvelopeSimple className="size-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 ">
                    <Link className="size-8">
                        <InstagramLogo className="size-full" />
                    </Link>
                    <Link className="size-8">
                        <YoutubeLogo className="size-full" />
                    </Link>
                    <Link className="size-8">
                        <PinterestLogo className="size-full" />
                    </Link>
                    <Link className="size-8">
                        <XLogo className="size-full" />
                    </Link>
                    <Link className="size-8">
                        <TiktokLogo className="size-full" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
