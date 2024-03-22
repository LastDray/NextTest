import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer keywords={"users"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await responce.json()
    return {
        props: {users},
    }
}