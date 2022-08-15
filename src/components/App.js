import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './../pages/Home.js';
import Nfts from './../pages/Nfts.js';
import Trade from './../pages/Trade.js';
import MindNode from './../pages/MindNode.js';

export default function App() {

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue} />} />
            <Route path="/nfts" element={<Nfts token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue} />} />
            <Route path="/trade" element={<Trade token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue} />} />
            <Route path="/mind-node" element={<MindNode token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue} />} />
        </Routes>
        </BrowserRouter>
    );
}