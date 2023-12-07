import { useLoaderData } from "react-router-dom";
import { supabase } from "../services/supabase";
import Table from "../components/Table";
import { useEffect, useState } from "react";


export async function loader({params}){
 const approved = params.approved == "approved"
 
  if (approved){
  const { data, error } = await supabase.from(params.table).select(`*`).not("approvedAt", "is", null).order('created_at', {ascending: false})

  return {data,approved}
  }
  else{
    const { data, error } = await supabase.from(params.table).select(`*`).is("approvedAt", "NULL").order('created_at', {ascending: false})

  return {data,approved}
  }
}

const TarRap = () => {

const {data, approved} = useLoaderData()
const [audits, setAudits] = useState(data)

useEffect(() => {}, [audits, setAudits])
const handleRowClick = async ({data, index}) => {
if (approved) return
data.approvedAt = new Date()
const { data:[updatedData], error } = await supabase.from('Form').upsert([data]).select()
console.log(updatedData)
setAudits((state) => {
  state[index] = updatedData
  return [...state]
})
}

    return (
        <div style={{ textAlign: 'center', marginTop: '50px',display: "flex", justifyContent: "center", flexDirection:"column" }}>
          <h1>Tarkistettavat raportit</h1>

{/* {"id":5,"created_at":"2023-12-05T12:50:46.990301+00:00","group":"Olli Opettaja, Jaska Jokunen",
"campus":"Rovaniemi","space":"B321","condition":"Hyvä","notes":"Kaikki ok","images":"",
"other_notes":"","date":null,"turvallisuuskatselmointi":null,"testi":null} */}

<Table head={{"created_at":"Päivämäärä" ,"group":"Katselmointiryhmä","campus":"Kampus", "space":"Huone", "condition":"Tilan kunto", "notes":"Huomioita","other_notes":"Muita huomioita", "approvedAt":"Hyväksytty"}} body={audits} onRowClicked={handleRowClick}>

</Table>

          </div>

    );
  };
  
  export default TarRap;