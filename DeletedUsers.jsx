import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUsers } from "../Services/UserService";
import { AdminNavigationbar } from "./AdminNavigationBar";

export function DeletedUsersList() {

    const [user, setUser] = useState([]);

    async function fetchUsersList() {
        try {
            const data = await getUsers();
            setUser(data.list); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsersList();
    }, []);

    return (
        <>
            <AdminNavigationbar />
            <h1>Deleted User List</h1>
            <Container>
                {user.length !== 0 ? (
                    <Table className="mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {/* <th>Password</th> */}
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((s) => (
                                (s.userStatus === "DELETED") && (
                                    <tr key={s.userId}>
                                        <td>{s.userName}</td>
                                        <td>{s.userPhone}</td>
                                        <td>{s.userEmail}</td>
                                        {/* <td>{s.userPassword}</td> */}
                                        <td>{s.userStatus}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <h4>Currently, You Don't Have Any Users...</h4>
                )}
            </Container>

        </>
    );
}
