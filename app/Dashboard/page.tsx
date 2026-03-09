async function fetchData(){
    await new Promise((r) => setTimeout(r,5000)) ;
}

export default async function() {
    await fetchData() ;
    return (<div>
        Hii there.
    </div>)
}