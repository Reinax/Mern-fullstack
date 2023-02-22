import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Globalstyles.css';


export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    async function onSubmit(e) {
        e.preventDefault();
    
        const newSearch = { ...searchInput};
    
        await fetch("http://localhost:5000/search/:id", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newSearch),
        })
        .catch(error => {
        window.alert(error);
        return;
        });
    
        navigate('/');
    }


    return (
        <div className="searchPlacement">
            <h3>Search Records</h3>
            <input 
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
                onClick={() => onSubmit()}
            />
        </div>
    );
}