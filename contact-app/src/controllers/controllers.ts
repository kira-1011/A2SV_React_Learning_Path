export const getData = async<T>(URL: string) => {

    const response = await fetch(URL);

    // Check if the resource is found
    if(response.ok){
        return await response.json();
    }
    else{
        throw Error("Something went wrong!")
    }
};

export const createData = async(data: FormData, URL: string) => {

    return await fetch(URL, {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data))
    });
}

export const updateData = async(data: FormData, URL: string) => {

    
    await fetch(URL, {
        headers:{
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(Object.fromEntries(data))
    });
}

export const deleteData = async(URL: string) => {

    await fetch(URL, {
        method: "DELETE"
    });
}
