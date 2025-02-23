import React from 'react'
import ListLinks from './ListLinks'
import { Link } from 'react-router-dom'
import Wrapper from './../Wrapper/Wrapper'
import * as Icon from '@phosphor-icons/react'
import { helperFooterList, institutionalFooterList, policiesFooterList } from '../../Utils/Extra'

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-800">
            <Wrapper>
                <div className="flexCol w-full justify-between gap-y-80 py-8">
                    <div className="flex w-full flex-wrap justify-between  gap-x-12 gap-y-32 max-420:gap-y-16">
                        <ListLinks list={institutionalFooterList} title={'Institucional'} />
                        <ListLinks list={policiesFooterList} title={'Políticas'} />
                        <ListLinks list={helperFooterList} title={'Ajuda'} />
                    </div>

                    <div className="max-912:flexCol flex w-full items-end justify-between gap-16 text-neutral-400 max-912:items-center max-912:gap-8">
                        <div className="flex justify-end gap-8 ">
                            <Link className="size-8">
                                <Icon.InstagramLogo className="size-full" />
                            </Link>
                            <Link className="size-8">
                                <Icon.YoutubeLogo className="size-full" />
                            </Link>
                            <Link className="size-8">
                                <Icon.PinterestLogo className="size-full" />
                            </Link>
                            <Link className="size-8">
                                <Icon.XLogo className="size-full" />
                            </Link>
                            <Link className="size-8">
                                <Icon.TiktokLogo className="size-full" />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-center text-xs">
                                Copyright ATELIER DO SICKO LTDA - 15802576000140 - 2023. Todos os direitos
                                reservados.
                            </p>
                        </div>

                        <div className="flex items-end justify-end text-sm">
                            <div className="flex flex-col justify-end">
                                <p className="font-semibold uppercase">Site desenvolvido por:</p>

                                <div className="flex items-center gap-4 text-neutral-400">
                                    <p className="text-nowrap max-[359px]:text-wrap">
                                        Paulo Tarso - Desenvolvedor Full Stack
                                    </p>

                                    <div className="flex gap-3">
                                        <Link className="size-6">
                                            <Icon.GithubLogo className="size-full" />
                                        </Link>
                                        <Link className="size-6">
                                            <Icon.LinkedinLogo className="size-full" />
                                        </Link>
                                        <Link className="size-6">
                                            <Icon.EnvelopeSimple className="size-full" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer
