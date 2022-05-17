import { API } from "../../backend";

export const getProduct = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    }).then(Response => {
        return Response.json()
    })
    .catch( err => console.log(err))
}