import { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
const url = "http://localhost:5000/greet";

const Form = ({ sendGreet }) => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            console.log("Field name is empty");
            return;
        }
        const data = { name };
        sendData({ url, data });
    };

    async function sendData({ url, data }) {
        try {
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            const res = await fetch(url, params);
            if (Math.floor(res.status / 100) !== 2) {
                throw new Error("Something went wrong...");
            }
            const { msg } = await res.json();

            if (msg) {
                sendGreet(msg);
            }
        } catch (e) {
            console.log(e);
            sendGreet("Something went wrong...");
        }
    }
    return (
        <div>
            <h2>Get greet to the user</h2>
            <form onSubmit={handleSubmit}>
                <Input id="input" value={name} setValue={setName}>
                    Введите имя
                </Input>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Form;
