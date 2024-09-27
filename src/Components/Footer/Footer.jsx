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
                <div className="grid grid-cols-3 grid-rows-2 gap-32 py-10 text-white">
                    <div className="flex size-full justify-start">
                        <ListLinks list={institutionalFooterList} title={'Institucional'} />
                    </div>

                    <div className="flex size-full justify-center">
                        <ListLinks list={policiesFooterList} title={'Políticas'} />
                    </div>

                    <div className="flex size-full justify-end">
                        <ListLinks list={helperFooterList} title={'Ajuda'} />
                    </div>

                    <div className="flex items-end justify-end text-xs">
                        <p>
                            Copyright ATELIER DO SICKO LTDA - 15802576000140 - 2023. Todos os direitos
                            reservados.
                        </p>
                    </div>

                    <div className="flex items-end justify-end text-sm">
                        <div className="flex flex-col justify-end">
                            <p className="font-semibold uppercase">Site desenvolvido por:</p>

                            <div className="flex items-center gap-2">
                                <p>Paulo Tarso - Desenvolvedor Full Stack</p>

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

                    <div className="flex items-end justify-end">
                        <div className="flex items-end gap-5">
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
