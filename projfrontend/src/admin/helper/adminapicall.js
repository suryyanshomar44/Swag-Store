import { API } from "../../backend";

//category call
//do it yourself
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(Response => {
        return Response.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    }).then(Response => {
        return Response.json()
    })
    .catch(err => console.log(err))
}

//product call

export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POSt",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product

    }).then(Response => {
        return Response.json()
    })
    .catch(err => console.log(err))
}
//get all products
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    }).then(Response => {
        return Response.json()
    })
    .catch(err => console.log(err))
}

//delete a product
export const deleteProduct = (productId,userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
        }
    })
    .then(Response => {
        return Response.json();
    })
    .catch(err => console.log(err));
};


//get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    }).then(Response => {
        return Response.json()
    })
    .catch(err => console.log(err))
}


//update a product
//do it yourself
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
        },
        body: product
    })
    .then(Response => {
        return Response.json();
    })
    .catch(err => console.log(err));
};