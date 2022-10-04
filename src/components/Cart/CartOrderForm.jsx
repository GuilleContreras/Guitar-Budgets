import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ContactOrderForm = () => {

    const {cart} = useContext(CartContext);

    const [id, setId] = useState()

    const [form, setForm] = useState({
        buyer: {name: "", email: "", phone: ""},
        items: [...cart]

    })

    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value }
        setForm(newForm);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, form).then((snapshot) => setId(snapshot.id));
    }

    return (
        <>
            <Container>
                {typeof id !== "undefined" ? (
                <p>Has enviado un formulario y la id es {id}</p>
                ) : (
                <div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="name">Name and Lastname</label>
                            <input type="text" name="name" id="name" value={form.name} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={form.email} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="phone" name="phone" id="phone" value={form.phone} onChange={changeHandler} />
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div> 
                )}
            </Container>
        </>
    );
}

export default ContactOrderForm;
