import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const MainProfile = () => {
    // Use state to manage the result and loading states
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(true);

    // Toast functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/user", {
                method: "get",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            });
            const data = await response.json();
            JSON.stringify(result);

            if (data.error) {
                notifyA(data.error);
            } else {
                setResult(data);
                console.log(result);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            notifyA("Error fetching data");
        } finally {
            // Set loading to false after fetching data
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    Name: {result.msg.name}<br />
                    Username: {result.msg.username}<br />
                    email: {result.msg.email}<br />
                    <button onClick={getData}>Show</button>
                </>
            )}
        </>
    )
}

export default MainProfile;
