import { useEffect } from "react";
import { useState } from "react";
import { useInRouterContext, useParams } from "react-router-dom";

const UserPage = () => {

    const params = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, []);

    console.log(user);

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <a href="{user.website}">{user.website}</a>
            <p>{user?.address?.city}</p>
        </div>
        


    )

}

export default UserPage;