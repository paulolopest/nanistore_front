import image1 from './../Assets/images/berserkskull.png'
import image2 from './../Assets/images/BEHIND1.png'
import image3 from './../Assets/images/CAQUETA6.png'
import image4 from './../Assets/images/REI.png'
import image5 from './../Assets/images/SMASHF.png'

export const formatPrice = (price) => {
    return (price - 0.01).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

export const tabs = [
    { id: 'oversized-premium', label: 'Oversized Premium' },
    { id: 'shorts-compressao', label: 'Shorts Compressão' },
    { id: 'camisetas', label: 'Camisetas' },
    { id: 'camiseta-dry-fit', label: 'Camiseta Dry-fit' },
    { id: 'kit-compressao', label: 'Kit Compressão' },
]

export const sizes = [
    {
        id: 'p',
        label: 'P',
        man: { busto: '87-94', cintura: '79-84', quadril: '91-97', entrepernas: '80' },
        woman: { busto: '84-88', cintura: '68-72', quadril: '93-97', entrepernas: '77,5' },
    },
    {
        id: 'm',
        label: 'M',
        man: { busto: '95-102', cintura: '85-90', quadril: '98-104', entrepernas: '81' },
        woman: { busto: '89-95', cintura: '73-79', quadril: '96-102	', entrepernas: '77,5' },
    },
    {
        id: 'g',
        label: 'G',
        man: { busto: '103-110', cintura: '91-98', quadril: '105-112', entrepernas: '82' },
        woman: { busto: '96-103	', cintura: '80-87', quadril: '103-110', entrepernas: '77,5' },
    },
    {
        id: 'gg',
        label: 'GG',
        man: { busto: '111-118', cintura: '99-106', quadril: '113-120', entrepernas: '83' },
        woman: { busto: '104-111', cintura: '88-96', quadril: '111-119', entrepernas: '77,5' },
    },
    {
        id: 'xgg',
        label: 'XGG',
        man: { busto: '119-126', cintura: '107-116', quadril: '121-128', entrepernas: '84' },
        woman: { busto: '112-119', cintura: '97-105	', quadril: '120-127', entrepernas: '77,5' },
    },
]
export const productDetails = [
    { title: 'Material', description: 'Dry Fit' },
    { title: 'Tipo', description: 'Esportiva' },
    { title: 'Translúcido', description: 'Não' },
    { title: 'Cor', description: 'Branca' },
    { title: 'Caimento', description: 'Ajusta ao corpo' },
    { title: 'Elasticidade', description: 'Média' },
]

export const institutionalFooterList = [
    { id: 4, name: 'Segurança', link: '' },
    { id: 3, name: 'Fale conosco', link: '' },
    { id: 2, name: 'Quem somos', link: '' },
    { id: 1, name: 'Onde estamos', link: '' },
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
        name: 'Gengar',
        src: [image1, image5],
        type: 'Oversized Premium',
        price: 50,
    },
    {
        id: 2,
        name: 'Behind TOJI',
        src: [image2, image4],
        type: 'Oversized Premium',
        price: 50,
    },
    {
        id: 3,
        name: 'Barba Branca',
        src: [image3, image3],
        type: 'Oversized',
        price: 50,
    },
    {
        id: 5,
        name: 'Fox Devil',
        src: [image5, image1],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 4,
        name: 'Gengar',
        src: [image1, image5],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 6,
        name: 'Gengar',
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
        name: 'Rey Ayanama',
        src: [image4, image2],
        type: 'Dry Fit',
        price: 50,
    },
    {
        id: 10,
        name: 'Fox Devil',
        src: [image5, image1],
        type: 'Dry Fit',
        price: 50,
    },
]
