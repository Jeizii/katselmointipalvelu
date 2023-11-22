import { supabase } from "./supabase";


export async function createLocation() {

    const { data, error } = await supabase
        .from('environment')
        .insert([
            { name:"Rovaniemen kampus", address: "Jokiväylä nönnönöö" },
        ])
        .select()

    if(error){
        throw new Error("Ympäristön lisääminen epäonnistui syystä x")
    }

    return data

}

export async function getLocationById(id) {
    const { data, error } = await supabase
    .from('environment').select(`
        *,
        location ( * )
    `).eq("id", id)

    if(error){
        throw new Error("Ympäristön hakeminen epäonnistui syystä x")
    }

    return data
}