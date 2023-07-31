import {useState} from "react";

export const FormContacts = () => {

    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("")
    const [formData, setFormdata] = useState({
        name: "",
        surname: "",
        subject: "",
        body: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log('e', e)
    }

    return (
        <div id="form-wrapper" className="form-wrapper">
            <form action={`mailto:sanvi.simo@gmail.com?subject=${subject}&body=${body}`} method="post" encType="text/plain" className="form" onSubmit={handleSumbit}>

                <label htmlFor="name">Nome *</label>
                <input id="name" type="text" name="nome" onChange={(e) => setFormdata({...formData, name: e.target.value})} />

                <label htmlFor="surname">Cognome *</label>
                <input id="surname" type="text" name="cognome" />

                <label htmlFor="phone">Telefono *</label>
                <input id="phone" type="text" name="telefono" />

                <label htmlFor="ssubject">Oggetto *</label>
                <input
                    id="ssubject"
                    type="text"
                    name="ssubject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />

                <label htmlFor="messaggio">Il tuo messaggio:</label>
                <textarea
                    name="messaggio"
                    id="messaggio"
                    rows="8"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />

                <input type="submit" value="INVIA" />
            </form>
        </div>
    )
}
