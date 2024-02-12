import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getArtists } from "../Services/UserService";
import { AdminNavigationbar } from "./AdminNavigationBar";

export function DeletedArtistList() {

    const [user, setUser] = useState([]);

    async function fetchUsersList() {
        try {
            const data = await getArtists();
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
            <h1>Deleted Artist List</h1>
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
                                (s.artistStatus === "DELETED") && (
                                    <tr key={s.artistId}>
                                        <td>{s.artistName}</td>
                                        <td>{s.artistPhone}</td>
                                        <td>{s.artistEmail}</td>
                                        {/* <td>{s.artistPassword}</td> */}
                                        <td>{s.artistStatus}</td>
                                        
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <h4>Currently, You Don't Have Any artists...</h4>
                )}
            </Container>
        </>
    );
}
