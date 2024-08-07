import React, {useEffect, useState} from 'react';
import {Button, Form, ListGroup} from 'react-bootstrap';

const PlayerSelect = () => {
    // Hardcoded list of NBA player names
    const[playerList, setPlayerList] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const[loading, setLoading] = useState(false)
    const [similarPlayers, setSimilarPlayers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPlayerNames", {
            method: 'GET', // Use GET for fetching data
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse JSON data
            })
            .then(data => {
                setPlayerList(data); // Set player list state
            })
            .catch(error => {
                console.error("Error fetching player names:", error); // Log errors
            });
    }, []);

    // Handle selection change
    const handleSelectChange = (event) => {
        setSelectedPlayer(event.target.value);
    };

    const findSimilarPlayers = () => {
        fetch("http://127.0.0.1:5000/findSimilarPlayers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ player_name: selectedPlayer })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse JSON data
            })
            .then(data => {
                setSimilarPlayers(data); // Set player list state
            })
            .catch(error => {
                console.error("Error fetching player names:", error); // Log errors
            });
    };


    return (
        <div className="container">
            <h2>Select an NBA Player</h2>
            <Form.Group controlId="playerSelect">
                <Form.Label>Choose a player</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedPlayer}
                    onChange={handleSelectChange}
                >
                    <option value="">-- Select a player --</option>
                    {playerList.map((player, index) => (
                        <option key={index} value={player}>
                            {player}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <br/>
            <Button
                variant="primary"
                onClick={findSimilarPlayers}
                disabled={loading || !selectedPlayer}
            >
                {loading ? 'Finding...' : 'Find Similar Players'}
            </Button>
            <br/>
            <br/>
            {similarPlayers.length > 0 && (
                <div>
                    <h3>Similar Players</h3>
                    <ListGroup>
                        {similarPlayers.map((player, index) => (
                            <ListGroup.Item key={index}>
                                {index} - { player['Player Name']} - Distance: {player['Distance_to_Player']}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    );
};

export default PlayerSelect;
