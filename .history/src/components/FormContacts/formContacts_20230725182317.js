import './FormContacts.css'

export const FormContacts = () => {
    return (
        <div id="form-wrapper">
            <form action="#" method="get" className="form">

                <label for="name">Nome *</label>
                <input id="name" type="text" name="name" required />

                <label for="surname">Cognome *</label>
                <input id="surname" type="text" name="surname" required />

                <label for="number">Telefono *</label>
                <input id="number" type="tel" name="number" required />

                <label for="message">Il tuo messaggio:</label>
                <textarea name="message" id="message" rows="10"></textarea>

                <input type="submit" value="Invia" />

            </form>
        </div>
    )
}