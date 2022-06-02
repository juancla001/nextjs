import Head from 'next/head'
import Container from './../components/Container';
import fetch from 'isomorphic-fetch'
import Users from './../components/Users'


const Index = (props) => {
    return (
        <>
        <Head> Next.js practica </Head>
        <Container>
                <h1>
                Practica de Next.js
                </h1>
                <Users users={props.users} />
                
        </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJSON = await res.json()
    return {users: resJSON.data }
  }

export default Index;