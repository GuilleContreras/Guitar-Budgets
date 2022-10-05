import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../Cart/cartOrderForm.css';

const ContactOrderForm = () => {

    const {cart, total, clear} = useContext(CartContext);

    const [id, setId] = useState()

    let now = new Date();
    const [form, setForm] = useState({
        buyer: {name: "", email: "", phone: ""},
        items: [...cart],
        total: total,
        date: now
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
                <p className='formMsg'>Has enviado un formulario y la id es {id}</p>
                ) : (
                <div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="name" className='nameLabel'>Name and Lastname</label>
                            <input type="text" name="name" id="name" value={form.name} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="email" className='emailLabel'>Email</label>
                            <input type="email" name="email" id="email" value={form.email} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="phone" className='phoneLabel'>Phone Number</label>
                            <input type="phone" name="phone" id="phone" value={form.phone} onChange={changeHandler} />
                        </div>
                        <Button variant="primary" type="submit" className='m-3'>
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
