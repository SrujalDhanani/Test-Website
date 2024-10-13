// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CharacterCard from "./CharacterCard";
// import Paggination from "./Paggination"; 
// import Loader from "./Loader";

// const API_URL = "https://swapi.dev/api/people/";

// function Test() {
//   const [characters, setCharacters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get(`${API_URL}?page=${currentPage}`);
//         setCharacters(response.data.results);
//         setTotalPages(Math.ceil(response.data.count / itemsPerPage)); // Calculate total pages
//       } catch (err) {
//         setError("Failed to load data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCharacters();
//   }, [currentPage, itemsPerPage]);

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(1); 
//   };

//   return (
//     <div>
//       <h1 className="List_per">Star Wars Characters--</h1>
//       {loading && <Loader />}
//       {error && <p>{error}</p>}
//       <div className="character-grid">
//         {characters.map((character) => (
//           <CharacterCard key={character.name} character={character} />
//         ))}
//       </div>
//       <div className='Pagination'>
//         <Paggination
//           totalPages={totalPages}
//           itemsPerPage={itemsPerPage}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//           onItemsPerPageChange={handleItemsPerPageChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default Test;


import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Paggination from "./Paggination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box"; // For centering the loader

const API_URL = "https://swapi.dev/api/people/";

function Test() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${API_URL}?page=${currentPage}`);
                console.log("hello", response.data)
                setCharacters(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage)); // Calculate total pages
            } catch (err) {
                setError("Failed to load data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [currentPage, itemsPerPage]);

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    return (
        <div>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <h1 className="List_per">Star Wars Characters--</h1>
                    {error && <p>{error}</p>}
                    <div className="character-grid">
                        {characters.map((character) => (
                            <CharacterCard key={character.name} character={character} />
                        ))}
                    </div>
                    <div className="Pagination">
                        <Paggination
                            totalPages={totalPages}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                            onItemsPerPageChange={handleItemsPerPageChange}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Test;
