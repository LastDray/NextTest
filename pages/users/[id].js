import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter();
    return (
        <MainContainer keywords={user.name}>
            <h1>Пользователь с id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await responce.json()
    return {
        props: {user},
    }
}