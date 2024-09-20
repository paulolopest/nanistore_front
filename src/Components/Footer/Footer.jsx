import React from 'react'
import ListLinks from './ListLinks'
import { Link } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import { helperFooterList, institutionalFooterList, policiesFooterList } from '../../Utils/Extra'
import Wrapper from './../Wrapper/Wrapper'

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-800">
            <Wrapper>
                <div className="flex w-full flex-col justify-between gap-32 py-10 text-white">
                    <div className="flex size-full justify-between">
                        <ListLinks list={institutionalFooterList} title={'Institucional'} />

                        <ListLinks list={policiesFooterList} title={'Políticas'} />

                        <ListLinks list={helperFooterList} title={'Ajuda'} />
                    </div>

                    <div className="flex items-end justify-between">
                        <p className="text-xs">
                            Copyright ATELIER DO SICKO LTDA - 15802576000140 - 2023. Todos os direitos
                            reservados.
                        </p>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold uppercase">Site desenvolvido por:</p>
                            <div className="flex flex-col gap-1">
                                <p>Paulo Tarso</p>

                                <div className="flex items-center gap-2">
                                    <p>Desenvolvedor Full Stack</p>

                                    <div className="flex gap-2">
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

                        <div className="flex gap-5 ">
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
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer
