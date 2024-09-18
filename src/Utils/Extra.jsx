import image1 from './../Assets/images/berserkskull.png'
import image2 from './../Assets/images/BEHIND1.png'
import image3 from './../Assets/images/CAQUETA6.png'
import image4 from './../Assets/images/REI.png'
import image5 from './../Assets/images/SMASHF.png'

export const tabs = [
    { id: 'oversized-premium', label: 'Oversized Premium' },
    { id: 'shorts-compressao', label: 'Shorts Compressão' },
    { id: 'camisetas', label: 'Camisetas' },
    { id: 'moletom', label: 'Moletom' },
    { id: 'bermudas', label: 'Bermudas' },
    { id: 'camiseta-dry-fit', label: 'Camiseta Dry-fit' },
    { id: 'kit-compressao', label: 'Kit Compressão' },
]

export const sizes = [
    { id: 'p', label: 'P' },
    { id: 'm', label: 'M' },
    { id: 'g', label: 'G' },
    { id: 'gg', label: 'GG' },
    { id: 'egg', label: 'EGG' },
]

export const institutionalFooterList = [
    { id: 4, name: 'Segurança', link: '' },
    { id: 2, name: 'Quem somos', link: '' },
    { id: 1, name: 'Onde estamos', link: '' },
    { id: 3, name: 'Fale conosco', link: '' },
]

export const policiesFooterList = [
    { id: 4, name: 'Política de envio', link: '' },
    { id: 3, name: 'Política de reembolso', link: '' },
    { id: 1, name: 'Políticas de privacidade', link: '' },
    { id: 2, name: 'Política de troca e devolução', link: '' },
]

export const helperFooterList = [
    { id: 3, name: 'Como lavar?', link: '' },
    { id: 1, name: 'Qual é o prazo de envio?', link: '' },
    { id: 4, name: 'É seguro comprar na "Nani? Store"?', link: '' },
]

export const items = [
    {
        id: 1,
        name: 'Berserk Logo',
        src: [image1, image5],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 2,
        name: 'KON CSM',
        src: [image2, image4],
        type: 'Oversized',
        price: 50,
    },
    {
        id: 3,
        name: 'SNK Logo',
        src: [image3, image3],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 4,
        name: 'REI AYANAMA EVANGELION',
        src: [image1, image2, image3, image4],
        type: 'Oversized',
        price: 50,
    },
    {
        id: 5,
        name: 'FMA',
        src: [image5, image1],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 6,
        name: 'Hanafuda',
        src: [image1, image5],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 7,
        name: 'Kon',
        src: [image2, image4],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 8,
        name: 'Katana Flower',
        src: [image5, image3],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 9,
        name: 'Gengar Gym',
        src: [image4, image2],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 10,
        name: 'DBZ Logo',
        src: [image5, image1],
        type: 'Dry Fit',
        price: 50,
    },
]
