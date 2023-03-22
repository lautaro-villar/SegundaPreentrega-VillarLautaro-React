import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const collection = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "bicicletas");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            console.log(docs);
            setBikes(docs);
        });
    }, []);

    return (
        <div>
            {bikes.map((prod) => (
                <div key={prod.marca}>
                    <h4> marca: {prod.marca}</h4>
                    <p> $ {prod.precio}</p>
                </div>
            ))}
            </div >
            );
}

export default collection;