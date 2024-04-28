
export default function Products ({params,}:{
    params:{productid:string};
}) {
    console.log(params.productid)
    return (
        <>
        <h1>Hello world with {params.productid}</h1>
        </>
    )
    
}