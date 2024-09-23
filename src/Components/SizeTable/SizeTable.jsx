import React from 'react'

const SizeTable = () => {
    return (
        <div className="flex size-full h-fit items-center justify-center rounded-xl bg-neutral-800 p-4 text-lg uppercase text-neutral-100 shadow-default">
            <div className="flex flex-col font-semibold [&>p]:border-b [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1 className="px-5 text-transparent">a</h1>
                <p className="text-white">Altura</p>
                <p className="text-white">Largura</p>
                <p className="text-white">Mangas</p>
            </div>
            <div className="flex flex-col [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1 className="px-5">PP</h1>
                <p>63</p>
                <p>47</p>
                <p>17</p>
            </div>
            <div className="flex flex-col [&>h1]:px-5 [&>h1]:font-semibold [&>h1]:text-white [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1>P</h1>
                <p>65</p>
                <p>49</p>
                <p>19</p>
            </div>
            <div className="flex flex-col [&>h1]:px-5 [&>h1]:font-semibold [&>h1]:text-white [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1>M</h1>
                <p>67</p>
                <p>51</p>
                <p>21</p>
            </div>
            <div className="flex flex-col [&>h1]:px-5 [&>h1]:font-semibold [&>h1]:text-white [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1>G</h1>
                <p>70</p>
                <p>54</p>
                <p>22</p>
            </div>
            <div className="flex flex-col [&>h1]:px-5 [&>h1]:font-semibold [&>h1]:text-white [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1>GG</h1>
                <p>74</p>
                <p>56</p>
                <p>23</p>
            </div>
            <div className="flex flex-col [&>h1]:px-5 [&>h1]:font-semibold [&>h1]:text-white [&>p]:border-b [&>p]:border-r [&>p]:border-solid [&>p]:border-neutral-400 [&>p]:p-5">
                <h1>XG</h1>
                <p>76</p>
                <p>58</p>
                <p>25</p>
            </div>
        </div>
    )
}

export default SizeTable
