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
    { id: 'p', label: 'P' },
    { id: 'm', label: 'M' },
    { id: 'g', label: 'G' },
    { id: 'gg', label: 'GG' },
    { id: 'xgg', label: 'XGG' },
]
export const productDetails = [
    { title: 'p', description: 'P' },
    { title: 'm', description: 'M' },
    { title: 'g', description: 'G' },
    { title: 'gg', description: 'GG' },
    { title: 'xgg', description: 'XGG' },
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
        name: 'Gengar',
        src: [image1, image5],
        type: 'Oversized Premium',
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
        id: 2,
        name: 'TOJI Fushiguru',
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
        name: 'fox devil',
        src: [image5, image1],
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

// {
//     /* <div className="flex h-fit w-[32rem] flex-col gap-8">
//                         <motion.div className=" flex w-full flex-col gap-2 rounded-xl bg-white p-4 text-base font-light text-neutral-500 shadow-default">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <img
//                                         src="https://cdn.shopify.com/s/files/1/0611/1471/2252/files/correios-logo_1.svg?v=1648167047"
//                                         alt="correios logo"
//                                     />

//                                     <div className="flex flex-col">
//                                         <p>Entrega via Correios©</p>
//                                         <p className="text-sm text-green-500">
//                                             Envio para{' '}
//                                             <span className="font-semibold">São Gonçalo, RJ e Região</span>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <p className="font-semibold text-green-500">Frete Grátis</p>
//                             </div>

//                             <div className="flex flex-col gap-4 rounded-xl p-4 leading-none">
//                                 <div className="flex w-fit flex-col gap-1">
//                                     <div className="flex items-center gap-1 text-green-500">
//                                         <Icon.Package />
//                                         <p className="flex items-center gap-1">
//                                             Frete Grátis <Icon.Lightning />{' '}
//                                             <span className="text-sm font-bold uppercase italic text-green-500">
//                                                 Full
//                                             </span>{' '}
//                                             • <span className="text-blue-500">Disponível</span>
//                                         </p>
//                                     </div>
//                                     <p className="text-sm text-neutral-400">Enviado pelos Correios©</p>
//                                 </div>

//                                 <div className="flex items-center gap-1">
//                                     <Icon.SealCheck color="#3b82f6" />
//                                     <p>Compra Garantida. Saia satisfeito ou devolvemos o dinheiro</p>
//                                 </div>

//                                 <div className="flex items-center gap-1">
//                                     <Icon.Medal color="#3b82f6" />
//                                     <p>Mais vendido entre os produtos da coleção</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div> */
// }
