import './FormContacts.css'

export const FormContacts = () => {
    return (
        <div id="form-wrapper" className="form-wrapper">
            <form action="#" method="get" className="form">

                <label htmlFor="name">Nome *</label>
                <input id="name" type="text" name="name" required />

                <label htmlFor="surname">Cognome *</label>
                <input id="surname" type="text" name="surname" required />

                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="number" required />

                <label htmlFor="message">Il tuo messaggio:</label>
                <textarea name="message" id="message" rows="10"></textarea>

                <input type="submit" value="INVIA" />

            </form>
        </div>
    )
}