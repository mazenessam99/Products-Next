export async function getDataSSR(link){
    const res=await fetch(link,{
        cache:"no-store",
    });
    return res.json();
}

export async function getDataSSG(link){
    const res=await fetch(link,{
        cache:"force-cache",
    });
    return res.json();
}

export async function getDataISR(link){
    const res=await fetch(link,{
        next:{revalidate:10},
    });
    return res.json();
}